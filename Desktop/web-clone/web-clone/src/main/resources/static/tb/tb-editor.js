/* ================= TB Shared Editor Logic =================
   Goals:
   - Apply saved settings for ALL users (public view)
   - Admin: toggle edit mode
   - Admin: double-click ANY element that has data-setting-key (except images) -> TinyMCE modal
   - Saving respects data-setting-type:
       text/inline -> save plain text (preserve original CSS/font)
       html        -> save HTML
   - No alert()/prompt() -> use toast only
============================================================ */

(function(){
  const STORAGE_KEY = 'tb_edit_mode';
  const SAVE_URL = '/api/admin/settings/update';
  let TB_EDITOR_CURRENT_ID = null;


  const isAdmin = !!window.__TB_IS_ADMIN;

  function $(sel, root=document){ return root.querySelector(sel); }
  function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  function showToast(msg, ms=2200){
    let t = $('#tb-toast');
    if(!t){
      t = document.createElement('div');
      t.id = 'tb-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.display = 'block';
    clearTimeout(showToast._tid);
    showToast._tid = setTimeout(()=>{ t.style.display = 'none'; }, ms);
  }

  function normalizeSettings(raw){
    if(!raw) return {};
    if(Array.isArray(raw)){
      const map = {};
      raw.forEach(it=>{
        if(!it) return;
        const k = it.key ?? it.settingKey ?? it.name;
        const v = it.value ?? it.settingValue ?? it.content ?? it.val;
        if(k) map[k] = v;
      });
      return map;
    }
    if(typeof raw === 'object') return raw;
    return {};
  }

  function inferType(el){
    const explicit = (el.getAttribute('data-setting-type') || '').toLowerCase();
    if(explicit){
      // Normalize legacy template convention: data-setting-type="img"
      if(explicit === 'img') return 'image';
      return explicit;
    }

    const tag = (el.tagName || '').toLowerCase();
    if(tag === 'img') return 'image';
    if(['div','section','article','main'].includes(tag)) return 'html';
    if(el.querySelector && el.querySelector('p,ul,ol,br,table,blockquote,figure')) return 'html';
    return 'text';
  }


  function looksLikeHtml(str){
    if(!str) return false;
    // Require an actual HTML tag (avoid treating '<3' as HTML)
    return /<\/?[a-z][^>]*>/i.test(str);
  }

  function htmlToPlainText(html){
    const s = String(html || '');
    if(!s) return '';

    function stripMarkup(markup){
      const tmp = document.createElement('div');
      // Preserve line breaks from <br> / <p> when converting
      tmp.innerHTML = String(markup || '')
        .replace(/<\s*br\s*\/?\s*>/gi, '\n')
        .replace(/<\/?\s*p\b[^>]*>/gi, '\n');
      return (tmp.textContent || '').replace(/\n{3,}/g, '\n\n').trimEnd();
    }

    // (1) Raw HTML tags
    if(looksLikeHtml(s)) return stripMarkup(s);

    // (2) HTML entities (e.g. '&lt;p&gt;Giới thiệu&lt;/p&gt;')
    // Decode entities first, then strip if the decoded text contains tags.
    const decoder = document.createElement('div');
    decoder.innerHTML = s;
    const decoded = decoder.textContent || '';
    if(decoded && looksLikeHtml(decoded)) return stripMarkup(decoded);
    return decoded;
  }

  function isRichHtml(html){
    const h = (html || '').trim();
    if(!h) return false;

    // Strip trivial wrappers that TinyMCE may add even for plain text
    let s = h
      .replace(/<\/?p[^>]*>/gi, '')
      .replace(/<br\s*\/?\s*>/gi, '\n')
      .replace(/&nbsp;/gi, ' ')
      .trim();

    // After removing trivial wrappers, if any tag remains => rich
    return /<\/?[a-z][^>]*>/i.test(s);
  }

  function normalizeForHostElement(el, html){
    const tag = (el && el.tagName ? el.tagName.toUpperCase() : '');
    let out = (html || '').trim();

    // If TinyMCE wraps content in a single <p> or <div>, unwrap to avoid invalid nesting
    const m = out.match(/^<(p|div)([^>]*)>([\s\S]*)<\/\1>$/i);
    if(m && tag && tag !== 'DIV'){
      const attrs = (m[2] || '').trim();
      const inner = m[3] || '';

      // carry text-align/style from wrapper to host element when possible
      const styleMatch = attrs.match(/style\s*=\s*"([^"]*)"/i);
      if(styleMatch && styleMatch[1]){
        // merge styles (simple append)
        const prev = el.getAttribute('style') || '';
        const merged = (prev ? prev + '; ' : '') + styleMatch[1];
        el.setAttribute('style', merged);
      }
      out = inner.trim();
    }

    return out;
  }
  function buildHeaders(){
    const headers = { 'Content-Type': 'application/json' };
    const csrfToken = document.querySelector('meta[name="_csrf"]')?.getAttribute('content');
    const csrfHeader = document.querySelector('meta[name="_csrf_header"]')?.getAttribute('content');
    if (csrfToken && csrfHeader) headers[csrfHeader] = csrfToken;
    return headers;
  }

  function normalizeImageUrlLikeInput(url){
    const s = (url || '').trim();
    if(!s) return '';

    // Convert "/domain.tld/path" -> "https://domain.tld/path" (common in mirrored HTML)
    if(/^\/[a-z0-9.-]+\.[a-z]{2,}\//i.test(s)) return 'https://' + s.slice(1);

    // Convert "domain.tld/path" -> "https://domain.tld/path"
    if(/^[a-z0-9.-]+\.[a-z]{2,}\//i.test(s) && !/^https?:\/\//i.test(s)) return 'https://' + s;

    return s;
  }

  async function uploadFileOrDataUrl(file){
    const endpoint = window.__TB_UPLOAD_ENDPOINT || '/api/admin/upload';

    // try upload endpoint first
    try{
      const fd = new FormData();
      fd.append('file', file);

      const csrfToken = document.querySelector('meta[name="_csrf"]')?.getAttribute('content');
      const csrfHeader = document.querySelector('meta[name="_csrf_header"]')?.getAttribute('content');
      const headers = {};
      if (csrfToken && csrfHeader) headers[csrfHeader] = csrfToken;

      const res = await fetch(endpoint, { method:'POST', body: fd, headers });
      if(res.ok){
        const ct = res.headers.get('content-type') || '';
        if(ct.includes('application/json')){
          const data = await res.json();
          return data.url || data.path || data.location || '';
        }
        return (await res.text()).trim();
      }
      // fallback below
    }catch(_e){
      // ignore -> fallback below
    }

    // fallback: store as Data URL (works even without backend upload)
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('Không đọc được file'));
      reader.readAsDataURL(file);
    });
  }

  async function updateSetting(key, value, valueType){
    const res = await fetch(SAVE_URL, {
      method: 'POST',
      headers: buildHeaders(),
      body: JSON.stringify({ key, value, valueType })
    });
    if(!res.ok) throw new Error(await res.text());

    window.__TB_SETTINGS = window.__TB_SETTINGS || {};
    window.__TB_SETTINGS[key] = value;
  }

  function syncAutoTooltip(el){
    if(!el || !el.getAttribute) return;
    if(!el.hasAttribute('data-tb-auto-tooltip')) return;

    const host = (el.closest && el.closest('.topic-achievement')) ? el.closest('.topic-achievement') : el;

    const text = (el.textContent || '').trim();
    if(text){
      host.setAttribute('data-tb-tooltip', text);
      host.setAttribute('title', text);
    }else{
      host.removeAttribute('data-tb-tooltip');
      host.removeAttribute('title');
    }
  }

  function initAutoTooltips(){
    $all('[data-tb-auto-tooltip]').forEach(syncAutoTooltip);
  }

  function applySavedSettings(){
    const settings = normalizeSettings(window.__TB_SETTINGS);
    $all('[data-setting-key]').forEach(el=>{
      const key = el.getAttribute('data-setting-key');
      if(!key) return;
      const v = settings[key];
      if(v === undefined || v === null || v === '') return;

      const type = inferType(el);

      if(type === 'image' || (el.tagName||'') === 'IMG'){
        const img = (el.tagName === 'IMG') ? el : el.querySelector('img');
        if(!img) return;
        img.src = v;
        img.removeAttribute('srcset');
        img.removeAttribute('sizes');
        return;
      }

      if(type === 'text' || type === 'inline'){
        // Always render as plain text to preserve host element styling (font, etc.).
        // If DB contains HTML (e.g., TinyMCE added <span style="font-family:...">), strip it.
        el.textContent = htmlToPlainText(v);
        syncAutoTooltip(el);
        return;
      }

      el.innerHTML = v;
      syncAutoTooltip(el);
    });
  }

  function applyAll(){
    applySavedSettings();
    initAutoTooltips();
  }

  function isEditModeOn(){
    return document.body.classList.contains('tb-edit-mode');
  }

  function setEditMode(on){
    document.body.classList.toggle('tb-edit-mode', !!on);
    localStorage.setItem(STORAGE_KEY, on ? '1' : '0');
    const btn = $('#btnToggleEdit');
    if(btn) btn.textContent = on ? 'Tắt Edit mode' : 'Bật Edit mode';
  }

  function initToggle(){
    if(!isAdmin) return;
    const btn = $('#btnToggleEdit');
    if(!btn) return;

    // restore state
    setEditMode(localStorage.getItem(STORAGE_KEY) === '1');

    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      setEditMode(!isEditModeOn());
    }, true);
  }

  function getComputedContentStyle(el){
    const cs = getComputedStyle(el);
    const fontFamily = cs.fontFamily || 'inherit';
    const fontSize = cs.fontSize || '16px';
    const lineHeight = cs.lineHeight || '1.5';
    // IMPORTANT: do not inherit text color from the page.
    // Some pages use white text; if we mirror that into TinyMCE it becomes unreadable
    // on the editor's (white) background.
    const color = '#000';
    // Keep editor view visually close; do NOT inject font styles into saved HTML.
    return `
      body { font-family:${fontFamily}; font-size:${fontSize}; line-height:${lineHeight}; color:${color}; background:#fff; }
      p { margin: 0; }

      /* Readability in editor: if stored HTML contains white text, it becomes invisible
         on the editor background. Override the most common "white" inline color forms
         ONLY for rendering inside TinyMCE (this does NOT change saved HTML). */
      body [style*="color:#fff"],
      body [style*="color: #fff"],
      body [style*="color:#ffffff"],
      body [style*="color: #ffffff"],
      body [style*="color:white"],
      body [style*="color: white"],
      body [style*="color:rgb(255"],
      body [style*="color: rgb(255"] {
        color: #000 !important;
      }
    `;
  }

  function closeEditor(){
    // destroy any TinyMCE instances created by this editor
    if(window.tinymce && window.tinymce.editors){
      try{
        window.tinymce.editors.slice().forEach(ed=>{
          if(ed && ed.id && ed.id.startsWith('tbEditorArea')){
            window.tinymce.remove(ed);
          }
        });
      }catch(_e){}
    }
    TB_EDITOR_CURRENT_ID = null;

    const overlay = $('#tb-editor-overlay');
    if(overlay) overlay.remove();
  }

  function openImageEditorForElement(el){
    const key = el.getAttribute('data-setting-key');
    if(!key){
      showToast('Thiếu data-setting-key nên không thể sửa.');
      return;
    }

    const img = (el.tagName === 'IMG') ? el : el.querySelector('img');
    if(!img){
      showToast('Không tìm thấy thẻ <img> để sửa.');
      return;
    }

    const currentRaw = img.getAttribute('src') || img.src || '';
    const current = normalizeImageUrlLikeInput(currentRaw);

    closeEditor();
    const overlay = document.createElement('div');
    overlay.id = 'tb-editor-overlay';
    overlay.innerHTML = `
      <div id="tb-editor-modal" class="tb-image-modal">
        <div class="tb-modal-head">
          <div class="tb-modal-title">Đổi ảnh</div>
          <div class="tb-modal-actions">
            <button type="button" class="tb-btn" data-act="cancel">Hủy</button>
            <button type="button" class="tb-btn primary" data-act="save">Lưu</button>
          </div>
        </div>

        <div class="tb-modal-body tb-image-body">
          <div class="tb-muted">Ảnh hiện tại:</div>
          <div class="tb-image-row">
            <div class="tb-current-box">
              <img id="tbImgPreview" alt="preview" />
            </div>

            <div class="tb-image-fields">
              <label class="tb-label" for="tbImgUrl">Dán URL (https://...)</label>
              <input class="tb-input" type="url" id="tbImgUrl" placeholder="https://example.com/image.jpg" />

              <div class="tb-spacer"></div>

              <label class="tb-label" for="tbImgFile">Hoặc upload file</label>
              <input class="tb-file" type="file" id="tbImgFile" accept="image/*" />

              <div class="tb-help">
                (Upload sẽ cố gắng gọi <code>${(window.__TB_UPLOAD_ENDPOINT || '/api/admin/upload').replace(/</g,'&lt;')}</code>; nếu chưa có API upload thì sẽ lưu dạng DataURL vào DB.)
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const inputUrl = overlay.querySelector('#tbImgUrl');
    const inputFile = overlay.querySelector('#tbImgFile');
    const preview = overlay.querySelector('#tbImgPreview');
    const btnCancel = overlay.querySelector('[data-act="cancel"]');
    const btnSave = overlay.querySelector('[data-act="save"]');

    const setPreview = (url)=>{
      if(!preview) return;
      const u = normalizeImageUrlLikeInput(url);
      preview.src = u || '';
    };

    inputUrl.value = current;
    setPreview(current);

    btnCancel.addEventListener('click', ()=> closeEditor());
    inputUrl.addEventListener('input', ()=> {
      const v = inputUrl.value;
      if(v) setPreview(v);
    });

    inputFile.addEventListener('change', ()=>{
      const f = inputFile.files && inputFile.files[0];
      if(!f) return;
      preview.src = URL.createObjectURL(f);
    });

    inputUrl.addEventListener('keydown', (ev)=>{
      if(ev.key === 'Enter'){
        ev.preventDefault();
        btnSave.click();
      }
      if(ev.key === 'Escape'){
        ev.preventDefault();
        closeEditor();
      }
    });

    btnSave.addEventListener('click', async ()=>{
      try{
        let next = normalizeImageUrlLikeInput(inputUrl.value);
        const f = inputFile.files && inputFile.files[0];
        if(f){
          next = await uploadFileOrDataUrl(f);
        }

        if(!next){
          showToast('Bạn hãy dán URL hoặc chọn file ảnh.');
          return;
        }

        img.src = next;
        img.removeAttribute('srcset');
        img.removeAttribute('sizes');
        await updateSetting(key, next, 'IMAGE');
        showToast('Đã lưu');
        closeEditor();
      }catch(err){
        console.error(err);
        showToast('Lỗi lưu: ' + (err?.message || 'unknown'));
      }
    });

    // clicking outside modal closes
    overlay.addEventListener('mousedown', (e)=>{
      if(e.target === overlay) closeEditor();
    });
  }

  function openTinyEditorForElement(el){
    const key = el.getAttribute('data-setting-key');
    if(!key){
      showToast('Thiếu data-setting-key nên không thể sửa.');
      return;
    }

    // Image is handled elsewhere (you said OK)
    const type = inferType(el);
    if(type === 'image' || (el.tagName||'') === 'IMG') return;

    // Build modal
    closeEditor();
    const overlay = document.createElement('div');
    overlay.id = 'tb-editor-overlay';

    const editorId = 'tbEditorArea_' + Date.now();
    TB_EDITOR_CURRENT_ID = editorId;

    overlay.innerHTML = `
      <div id="tb-editor-modal">
        <div class="tb-modal-head">
          <div class="tb-modal-title">Chỉnh sửa nội dung</div>
          <div class="tb-modal-actions">
            <button type="button" class="tb-btn" data-act="cancel">Hủy</button>
            <button type="button" class="tb-btn primary" data-act="save">Lưu</button>
          </div>
        </div>
        <div class="tb-modal-body">
          <textarea id="${editorId}"></textarea>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const btnCancel = overlay.querySelector('[data-act="cancel"]');
    const btnSave = overlay.querySelector('[data-act="save"]');

    btnCancel.addEventListener('click', ()=> closeEditor());

    if(!window.tinymce){
      showToast('TinyMCE chưa load (CDN). Bạn kiểm tra mạng/CDN hoặc host local.');
      // fallback: simple textarea edit (still no alert/prompt)
      const ta = overlay.querySelector('#' + editorId);
      ta.value = (type === 'text' || type === 'inline') ? (el.textContent || '') : (el.innerHTML || '');
      btnSave.addEventListener('click', async ()=>{
        try{
          const val = ta.value ?? '';
          if(type === 'text' || type === 'inline'){
            el.textContent = val;
            syncAutoTooltip(el);
            await updateSetting(key, val, 'text');
          }else{
            el.innerHTML = val;
            syncAutoTooltip(el);
            await updateSetting(key, val, 'html');
          }
          showToast('Đã lưu');
          closeEditor();
        }catch(err){
          console.error(err);
          showToast('Lỗi lưu: ' + (err?.message || 'unknown'));
        }
      });
      return;
    }

    // Init TinyMCE - always used for ALL text areas
    const initial = (type === 'text' || type === 'inline')
      ? (el.textContent || '')
      : (el.innerHTML || '');

    const content_style = getComputedContentStyle(el);

    window.tinymce.init({
      selector: '#' + editorId,
      height: 520,
      menubar: true,
      branding: false,
      promotion: false,
      toolbar_mode: 'sliding',
      plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
      toolbar: 'undo redo | blocks | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link table | removeformat | code fullscreen',
      // Keep markup changes minimal:
      forced_root_block: '',   // do not auto wrap with <p>
      valid_elements: '*[*]',
      extended_valid_elements: '*[*]',
      verify_html: false,
      entity_encoding: 'raw',
      convert_urls: false,
      content_style,

      setup: (editor) => {
        editor.on('init', () => {
          // for text/inline, put as plain text (no extra tags)
          if(type === 'text' || type === 'inline'){
            editor.setContent(editor.dom.encode(initial));
          }else{
            editor.setContent(initial);
          }
        });

        editor.on('keydown', (ev) => {
          if(ev.ctrlKey && ev.key === 'Enter'){
            ev.preventDefault();
            btnSave.click();
          }
          if(ev.key === 'Escape'){
            ev.preventDefault();
            closeEditor();
          }
        });
      }
    });

    btnSave.addEventListener('click', async ()=>{
      try{
        const editor = window.tinymce.get(editorId);
        if(!editor) throw new Error('TinyMCE init failed');

        if(type === 'text' || type === 'inline'){
          const htmlRaw = (editor.getContent({ format: 'html' }) || '').trim();
          const txt = (editor.getContent({ format: 'text' }) || '').trimEnd();

          // Even if TinyMCE produced rich HTML, persist as plain text for text/inline.
          // This keeps fonts/styles controlled by the template CSS.
          const plain = htmlToPlainText(isRichHtml(htmlRaw) ? htmlRaw : txt);
          el.textContent = plain;
          syncAutoTooltip(el);
          await updateSetting(key, plain, 'text');
        }else{
          const html = editor.getContent() || '';
          el.innerHTML = html;
          syncAutoTooltip(el);
          await updateSetting(key, html, 'html');
        }
        showToast('Đã lưu');
        closeEditor();
      }catch(err){
        console.error(err);
        showToast('Lỗi lưu: ' + (err?.message || 'unknown'));
      }
    });

    // clicking outside modal closes
    overlay.addEventListener('mousedown', (e)=>{
      if(e.target === overlay) closeEditor();
    });
  }

  function initDblClick(){
    if(!isAdmin) return;

    // Capture phase to beat other handlers (links, etc.)
    document.addEventListener('dblclick', (e)=>{
      if(!isEditModeOn()) return;

      const t = e.target;
      if(!t) return;

      // ignore editor ui
      if(t.closest('#tb-admin-bar') || t.closest('#tb-editor-overlay') || t.closest('.tox')) return;

      const el = t.closest('[data-setting-key]');
      if(!el) return;

      // prevent link navigation while editing
      e.preventDefault();
      e.stopPropagation();

      const type = inferType(el);
      if(type === 'image' || (el.tagName||'') === 'IMG'){
        openImageEditorForElement(el);
      }else{
        openTinyEditorForElement(el);
      }
    }, true);

    // also stop single-click navigation on <a> while in edit mode
    document.addEventListener('click', (e)=>{
      if(!isEditModeOn()) return;
      const a = e.target?.closest?.('a');
      if(a && a.closest('[data-setting-key]')){
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    // apply for all users
    applyAll();
    setTimeout(applyAll, 400);
    setTimeout(applyAll, 1200);
    setTimeout(applyAll, 2500);

    // admin features
    initToggle();
    initDblClick();
  });
})();
