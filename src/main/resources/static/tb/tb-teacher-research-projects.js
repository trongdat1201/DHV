(() => {
  const API_TOPICS = '/api/teacher-research-topics';
  const API_LIST = '/api/teacher-research-projects';
  const API_ADMIN = '/api/admin/teacher-research-projects';
  const API_UPLOAD_IMAGE = '/api/upload/image';

  const EDIT_MODE_KEY = 'TB_EDIT_MODE';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const escapeHtml = (s) => String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  // ====== THÔNG BÁO + CONFIRM (GIỐNG TEACHER TOPICS) ======
  // NOTE: Không phụ thuộc window.tbConfirm vì có thể khác signature (callback vs promise)
  let notificationTimeout = null;

  function showNotification(message, type = 'error') {
    const oldNotification = document.getElementById('tb-custom-notification');
    if (oldNotification) {
      oldNotification.remove();
      clearTimeout(notificationTimeout);
    }

    const notification = document.createElement('div');
    notification.id = 'tb-custom-notification';

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: ${type === 'error' ? '#fef2f2' : '#f0fdf4'};
      color: ${type === 'error' ? '#991b1b' : '#065f46'};
      border: 1px solid ${type === 'error' ? '#fecaca' : '#bbf7d0'};
      border-left: 4px solid ${type === 'error' ? '#dc2626' : '#10b981'};
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      max-width: 400px;
      min-width: 300px;
      z-index: 100005;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      animation: slideIn 0.3s ease-out;
      backdrop-filter: blur(8px);
    `;

    const icon = type === 'error' ? '❌' : '✅';

    notification.innerHTML = `
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="font-size: 18px; line-height: 1;">${icon}</div>
        <div style="flex: 1;">
          <div style="font-weight: 600; margin-bottom: 4px;">
            ${type === 'error' ? 'Lỗi' : 'Thành công'}
          </div>
          <div>${escapeHtml(String(message ?? ''))}</div>
        </div>
        <button id="tb-notification-close"
                style="background: none; border: none; font-size: 20px; cursor: pointer; color: #666; padding: 0; line-height: 1;">
          &times;
        </button>
      </div>
    `;

    // Inject keyframes once
    if (!document.getElementById('tb-custom-notification-style')) {
      const style = document.createElement('style');
      style.id = 'tb-custom-notification-style';
      style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100%); }
      }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    const closeBtn = notification.querySelector('#tb-notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => notification.remove(), 300);
      clearTimeout(notificationTimeout);
    });

    notificationTimeout = setTimeout(() => {
      notification.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  function showConfirm(message, callback) {
    const oldConfirm = document.getElementById('tb-custom-confirm');
    if (oldConfirm) oldConfirm.remove();

    const confirmOverlay = document.createElement('div');
    confirmOverlay.id = 'tb-custom-confirm';
    confirmOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100006;
      animation: fadeIn 0.2s ease-out;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    `;
    document.head.appendChild(style);

    const dialog = document.createElement('div');
    dialog.style.cssText = `
      background-color: white;
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      animation: scaleIn 0.3s ease-out;
    `;

    dialog.innerHTML = `
      <div style="text-align: center; margin-bottom: 24px;">
        <div style="font-size: 20px; color: #dc2626; margin-bottom: 8px;">⚠️</div>
        <div style="font-weight: 600; font-size: 18px; margin-bottom: 12px; color: #1f2937;">Xác nhận</div>
        <div style="color: #4b5563; line-height: 1.5;">${escapeHtml(String(message || ''))}</div>
      </div>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <button id="tb-confirm-cancel"
                style="padding: 10px 20px; border: 1px solid #d1d5db; background-color: white;
                       color: #374151; border-radius: 6px; cursor: pointer; font-weight: 500;
                       transition: all 0.2s; flex: 1;">
          Hủy
        </button>
        <button id="tb-confirm-ok"
                style="padding: 10px 20px; background-color: #dc2626; color: white;
                       border: none; border-radius: 6px; cursor: pointer; font-weight: 500;
                       transition: all 0.2s; flex: 1;">
          Xóa
        </button>
      </div>
    `;

    confirmOverlay.appendChild(dialog);
    document.body.appendChild(confirmOverlay);

    document.getElementById('tb-confirm-cancel').addEventListener('click', () => {
      confirmOverlay.remove();
    });

    document.getElementById('tb-confirm-ok').addEventListener('click', () => {
      confirmOverlay.remove();
      callback();
    });

    confirmOverlay.addEventListener('click', (e) => {
      if (e.target === confirmOverlay) confirmOverlay.remove();
    });
  }

  function notify(message, type = 'info') {
    if (type === 'error') return showNotification(message, 'error');
    return showNotification(message, 'success');
  }

  async function fetchJson(url, opts) {
    const res = await fetch(url, {
      credentials: 'same-origin',
      ...opts,
    });

    const ct = res.headers.get('content-type') || '';

    if (!res.ok) {
      // Try to surface a friendly error message
      if (ct.includes('text/html')) {
        const html = await res.text().catch(() => '');
        const looksLikeLogin = res.url.includes('/login') || /name\s*=\s*"username"/i.test(html);
        if (looksLikeLogin) {
          throw new Error('Bạn cần đăng nhập quyền admin để thực hiện thao tác này');
        }
        throw new Error(`Lỗi máy chủ (HTTP ${res.status}). Vui lòng thử lại`);
      }

      const text = await res.text().catch(() => '');
      throw new Error(text || `HTTP ${res.status}`);
    }

    if (ct.includes('application/json')) return res.json();

    // If backend redirects to login (not authenticated/authorized), fetch will often
    // follow redirect and return HTML with 200 OK.
    if (ct.includes('text/html')) {
      const html = await res.text().catch(() => '');
      const looksLikeLogin = res.url.includes('/login') || /name\s*=\s*"username"/i.test(html);
      if (looksLikeLogin) {
        throw new Error('Bạn cần đăng nhập quyền admin để thực hiện thao tác này');
      }
      // Not expected for our APIs; surface a concise error
      throw new Error('API trả về HTML không hợp lệ (kiểm tra cấu hình bảo mật/đường dẫn)');
    }

    return null;
  }

  function setVisible(el, visible) {
    if (!el) return;
    el.style.display = visible ? 'flex' : 'none';
  }

  function extractFirstImageUrlFromHtml(html) {
    try {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = String(html ?? '');
      const img = wrapper.querySelector('img');
      const src = img ? (img.getAttribute('src') || '') : '';
      const v = String(src || '').trim();
      return v || null;
    } catch {
      return null;
    }
  }

  function updateImageUi(url) {
    const wrap = $('#tbResearchImagePreviewWrap');
    const imgPrev = $('#tbResearchImagePreview');
    const hint = $('#tbResearchImageHint');
    const clearBtn = $('#tbResearchClearImageBtn');

    const u = String(url || '').trim();

    if (!imgPrev) return;

    if (!u) {
      imgPrev.src = '';
      if (wrap) wrap.style.display = 'none';
      else imgPrev.style.display = 'none';
      if (hint) hint.style.display = '';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }

    imgPrev.src = u;
    if (wrap) wrap.style.display = 'block';
    else imgPrev.style.display = 'block';
    if (hint) hint.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'inline-flex';
  }

  function getLocale() {
    return (document.documentElement.lang || 'vi').toLowerCase();
  }

  function validateTimeText(timeText) {
    const v = String(timeText ?? '').trim();
    if (!v) return 'Thời gian không được để trống';
    if (/^(19|20)\d{2}$/.test(v)) return null;
    if (/^\d{2}\/\d{2}\/(19|20)\d{2}$/.test(v)) return null;
    return 'Thời gian phải là năm (YYYY) hoặc ngày/tháng/năm (DD/MM/YYYY)';
  }

  let topics = [];
  let allProjects = [];
  let projects = [];
  let editingId = null;

  const filterState = {
    q: '',
    sort: 'newest',
    topicIds: new Set(),
  };

  function findTopicTitleById(id) {
    const t = topics.find((x) => String(x.id) === String(id));
    return t ? t.title : '';
  }

  function projectExcerpt(html, maxLen = 240) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = String(html ?? '');
    const text = (wrapper.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text) return '';
    return text.length > maxLen ? `${text.slice(0, maxLen)}...` : text;
  }

  function projectPlainText(html) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = String(html ?? '');
    return (wrapper.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function parseComparableDate(p) {
    const raw = p?.updatedAt || p?.createdAt || '';
    const t = Date.parse(raw);
    return Number.isFinite(t) ? t : 0;
  }

  function getFilterControls() {
    return {
      searchInput: $('#tbResearchSearchInput'),
      sortSelect: $('#tbResearchSortSelect'),
      topicList: $('#tbResearchTopicFilterList'),
    };
  }

  function getDetailSlug() {
    const injected = typeof window.__TB_RESEARCH_PROJECT_SLUG__ === 'string'
      ? window.__TB_RESEARCH_PROJECT_SLUG__
      : null;
    if (injected && injected.trim()) return injected.trim();

    const path = String(window.location && window.location.pathname ? window.location.pathname : '');
    const prefix = '/scientific-research/teacher/research-project/';
    if (!path.startsWith(prefix)) return null;

    const rest = path.slice(prefix.length);
    const slug = rest.split('/').filter(Boolean)[0];
    return slug ? decodeURIComponent(slug) : null;
  }

  function showDetailLayout(show) {
    const detail = $('#tb-research-project-detail');
    const listEl = $('#tb-research-project-list');
    const emptyEl = $('#tb-research-project-empty');
    if (detail) detail.style.display = show ? 'block' : 'none';
    if (listEl) listEl.style.display = show ? 'none' : 'grid';
    if (emptyEl) emptyEl.style.display = show ? 'none' : emptyEl.style.display;
  }

  function getListBasePath() {
    return '/scientific-research/teacher/research-project';
  }

  function getDetailPath(slug) {
    return `${getListBasePath()}/${encodeURIComponent(String(slug))}`;
  }

  function navigateToDetail(slug, { replace = false } = {}) {
    const url = getDetailPath(slug);
    try {
      if (replace) window.history.replaceState({ tbResearchSlug: slug }, '', url);
      else window.history.pushState({ tbResearchSlug: slug }, '', url);
    } catch {
      // ignore
    }
  }

  function navigateToList({ replace = false } = {}) {
    const url = getListBasePath();
    try {
      if (replace) window.history.replaceState({ tbResearchSlug: null }, '', url);
      else window.history.pushState({ tbResearchSlug: null }, '', url);
    } catch {
      // ignore
    }
  }

  function renderProjectDetail(p) {
    const metaEl = $('#tbResearchDetailMeta');
    const titleEl = $('#tbResearchDetailTitle');
    const imgWrap = $('#tbResearchDetailImageWrap');
    const contentEl = $('#tbResearchDetailContent');
    if (!metaEl || !titleEl || !imgWrap || !contentEl) return;

    const topic = escapeHtml(p && p.topicTitle ? p.topicTitle : '');
    const time = escapeHtml(p && p.timeText ? p.timeText : '');
    metaEl.innerHTML = `${topic ? `<span style="font-weight:800;">${topic}</span>` : ''}${topic && time ? ' • ' : ''}${time}`;
    titleEl.textContent = p && p.title ? String(p.title) : '';

    if (p && p.imageUrl) {
      imgWrap.innerHTML = `<img src="${escapeHtml(p.imageUrl)}" alt="" style="width:100%;max-height:420px;object-fit:cover;border-radius:12px;" loading="lazy" />`;
    } else {
      imgWrap.innerHTML = '';
    }

    // content may contain HTML from TinyMCE
    contentEl.innerHTML = (p && p.content) ? String(p.content) : '';
  }

  async function loadProjectDetail(slug) {
    showDetailLayout(true);

    const metaEl = $('#tbResearchDetailMeta');
    const titleEl = $('#tbResearchDetailTitle');
    const imgWrap = $('#tbResearchDetailImageWrap');
    const contentEl = $('#tbResearchDetailContent');

    if (metaEl) metaEl.textContent = 'Đang tải...';
    if (titleEl) titleEl.textContent = '';
    if (imgWrap) imgWrap.innerHTML = '';
    if (contentEl) contentEl.innerHTML = '';

    try {
      const p = await fetchJson(`${API_LIST}/by-slug/${encodeURIComponent(slug)}`);
      renderProjectDetail(p);
    } catch (e) {
      if (metaEl) metaEl.textContent = '';
      if (titleEl) titleEl.textContent = 'Không tìm thấy công trình nghiên cứu';
      if (contentEl) contentEl.innerHTML = `<div style="color:#b91c1c;font-weight:700;">${escapeHtml(e && e.message ? e.message : 'Không tìm thấy')}</div>`;
    }
  }

  function renderTopicFilterList() {
    const { topicList } = getFilterControls();
    if (!topicList) return;

    if (!topics || !topics.length) {
      topicList.innerHTML = '<div style="color:#6b7280;font-size:13px;">Chưa có chủ đề.</div>';
      return;
    }

    const selected = filterState.topicIds;
    topicList.innerHTML = topics.map((t) => {
      const id = String(t.id);
      const checked = selected.has(id) ? 'checked' : '';
      return `
        <label style="display:flex;gap:10px;align-items:flex-start;cursor:pointer;user-select:none;">
          <input type="checkbox" data-topic-id="${escapeHtml(id)}" ${checked}
            style="margin-top:2px;width:16px;height:16px;accent-color: var(--theme-primary-color);" />
          <span style="color:#374151;font-size:14px;line-height:1.35;">${escapeHtml(t.title || '')}</span>
        </label>
      `;
    }).join('');
  }

  function applyFilters() {
    let filtered = Array.isArray(allProjects) ? [...allProjects] : [];

    const q = String(filterState.q || '').trim().toLowerCase();
    if (q) {
      filtered = filtered.filter((p) => {
        const hay = [
          p.title,
          p.topicTitle,
          p.timeText,
          projectPlainText(p.content),
        ].join(' ').toLowerCase();
        return hay.includes(q);
      });
    }

    if (filterState.topicIds && filterState.topicIds.size) {
      filtered = filtered.filter((p) => filterState.topicIds.has(String(p.topicId)));
    }

    if (filterState.sort === 'oldest') {
      filtered.sort((a, b) => (parseComparableDate(a) - parseComparableDate(b)) || (Number(a.id) - Number(b.id)));
    } else {
      filtered.sort((a, b) => (parseComparableDate(b) - parseComparableDate(a)) || (Number(b.id) - Number(a.id)));
    }

    projects = filtered;
    renderProjects();
    renderProjectListModal();
  }

  function renderProjects() {
    const listEl = $('#tb-research-project-list');
    const emptyEl = $('#tb-research-project-empty');
    if (!listEl || !emptyEl) return;

    if (!projects.length) {
      listEl.innerHTML = '';
      emptyEl.style.display = 'block';
      return;
    }

    emptyEl.style.display = 'none';

    listEl.innerHTML = projects.map((p) => {
      const topic = escapeHtml(p.topicTitle || findTopicTitleById(p.topicId) || '');
      const time = escapeHtml(p.timeText || '');
      const title = escapeHtml(p.title || '');
      const img = p.imageUrl ? `<div style="margin-top:10px;"><img src="${escapeHtml(p.imageUrl)}" alt="" style="width:100%;height:180px;object-fit:cover;border-radius:10px;" loading="lazy" /></div>` : '';
      const slug = p.slug ? String(p.slug) : '';
      const href = slug ? getDetailPath(slug) : null;
      const linkStart = href ? `<a data-research-project-link="1" data-slug="${escapeHtml(slug)}" href="${escapeHtml(href)}" style="display:block;color:inherit;text-decoration:none;">` : '';
      const linkEnd = href ? `</a>` : '';

      return `
        <article data-id="${escapeHtml(p.id)}" style="border:1px solid rgba(0,0,0,0.08);border-radius:14px;padding:16px;background:#fff;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
          ${linkStart}
            <div style="font-size:12px;color:#6b7280;margin-bottom:6px;">${topic ? `${topic} • ` : ''}${time}</div>
            <h3 style="margin:0 0 10px 0;font-size:16px;line-height:1.35;color:#111827;">${title}</h3>
            ${img}
          ${linkEnd}
        </article>
      `;
    }).join('');
  }

  function renderProjectListModal() {
    const list = $('#tb-research-project-admin-list');
    if (!list) return;

    if (!projects.length) {
      list.innerHTML = '<div style="padding:12px;color:#6b7280;">Chưa có công trình nào.</div>';
      return;
    }

    list.innerHTML = projects.map((p) => {
      const topic = escapeHtml(p.topicTitle || findTopicTitleById(p.topicId) || '');
      const time = escapeHtml(p.timeText || '');
      const title = escapeHtml(p.title || '');
      return `
        <div data-id="${escapeHtml(p.id)}" style="display:flex;gap:10px;align-items:flex-start;justify-content:space-between;padding:10px 12px;border:1px solid rgba(0,0,0,0.08);border-radius:10px;">
          <div style="min-width:0;">
            <div style="font-weight:700;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:520px;">${title}</div>
            <div style="font-size:12px;color:#6b7280;">${topic ? `${topic} • ` : ''}${time}</div>
          </div>
          <div style="display:flex;gap:8px;flex-shrink:0;">
            <button type="button" data-action="edit" style="padding:8px 10px;border-radius:8px;border:1px solid #d1d5db;background:#fff;cursor:pointer;font-weight:600;">Sửa</button>
            <button type="button" data-action="delete" style="padding:8px 10px;border-radius:8px;border:1px solid #fecaca;background:#fff;cursor:pointer;font-weight:700;color:#dc2626;">Xóa</button>
          </div>
        </div>
      `;
    }).join('');
  }

  async function loadTopics() {
    const locale = getLocale();
    try {
      topics = await fetchJson(`${API_TOPICS}?locale=${encodeURIComponent(locale)}`);
    } catch (e) {
      if (window.__TB_IS_ADMIN) {
        showNotification('Tải danh sách chủ đề thất bại: ' + (e && e.message ? e.message : String(e)), 'error');
      }
      throw e;
    }

    const select = $('#tbResearchTopicSelect');
    if (!select) return;

    select.innerHTML = '<option value="">-- Chọn chủ đề --</option>' +
      topics.map((t) => `<option value="${escapeHtml(t.id)}">${escapeHtml(t.title)}</option>`).join('');

    renderTopicFilterList();
  }

  async function loadProjects() {
    const params = new URLSearchParams(window.location.search || '');
    const topicId = params.get('topicId');

    const qs = new URLSearchParams();
    qs.set('limit', '200');
    if (topicId) qs.set('topicId', topicId);

    try {
      allProjects = await fetchJson(`${API_LIST}?${qs.toString()}`);
      applyFilters();
    } catch (e) {
      if (window.__TB_IS_ADMIN) {
        showNotification('Tải danh sách công trình thất bại: ' + (e && e.message ? e.message : String(e)), 'error');
      }
      throw e;
    }
  }

  function resetForm() {
    editingId = null;
    $('#tbResearchProjectFormTitle').textContent = 'Thêm công trình nghiên cứu';
    $('#tbResearchTopicSelect').value = '';
    $('#tbResearchTimeText').value = '';
    $('#tbResearchTitle').value = '';
    const slugEl = $('#tbResearchSlug');
    if (slugEl) slugEl.value = '';
    $('#tbResearchImageUrl').value = '';
    const imgPrev = $('#tbResearchImagePreview');
    if (imgPrev) imgPrev.src = '';
    const fileInput = $('#tbResearchImageFile');
    if (fileInput) fileInput.value = '';
    updateImageUi('');

    const textarea = $('#tbResearchContent');
    if (textarea) textarea.value = '';
    if (window.tinymce && window.tinymce.get('tbResearchContent')) {
      window.tinymce.get('tbResearchContent').setContent('');
    }
  }

  function ensureTinyMce() {
    if (!window.tinymce) return;
    if (window.tinymce.get('tbResearchContent')) return;

    window.tinymce.init({
      selector: '#tbResearchContent',
      height: 360,
      menubar: false,
      plugins: 'link lists image code',
      toolbar: 'undo redo | bold italic underline | bullist numlist | link | removeformat | code',
      branding: false,
    });
  }

  function openModal() {
    const modal = $('#tb-research-project-modal');
    setVisible(modal, true);
    ensureTinyMce();
  }

  function closeModal() {
    const modal = $('#tb-research-project-modal');
    setVisible(modal, false);
  }

  function openListModal() {
    renderProjectListModal();
    setVisible($('#tb-research-project-list-modal'), true);
  }

  function closeListModal() {
    setVisible($('#tb-research-project-list-modal'), false);
  }

  function openCreate() {
    resetForm();
    openModal();
  }

  function openEditById(id) {
    const p = projects.find((x) => String(x.id) === String(id));
    if (!p) return notify('Không tìm thấy công trình', 'error');

    editingId = p.id;
    $('#tbResearchProjectFormTitle').textContent = 'Cập nhật công trình nghiên cứu';

    $('#tbResearchTopicSelect').value = String(p.topicId ?? '');
    $('#tbResearchTimeText').value = p.timeText || '';
    $('#tbResearchTitle').value = p.title || '';
    const slugEl = $('#tbResearchSlug');
    if (slugEl) slugEl.value = p.slug || '';
    $('#tbResearchImageUrl').value = p.imageUrl || '';
    updateImageUi(p.imageUrl || '');

    const textarea = $('#tbResearchContent');
    if (textarea) textarea.value = p.content || '';

    openModal();
    // If tinymce already initialized, push content
    if (window.tinymce && window.tinymce.get('tbResearchContent')) {
      window.tinymce.get('tbResearchContent').setContent(p.content || '');
    }
  }

  async function handleUploadImage() {
    const fileInput = $('#tbResearchImageFile');
    if (!fileInput) {
      showNotification('Không tìm thấy input file ảnh', 'error');
      return;
    }

    // UX like mẫu: bấm Upload -> mở chọn file; chọn xong sẽ upload
    if (!fileInput.files || !fileInput.files[0]) {
      fileInput.click();
      return;
    }

    const fd = new FormData();
    fd.append('file', fileInput.files[0]);

    try {
      const data = await fetchJson(API_UPLOAD_IMAGE, { method: 'POST', body: fd });
      if (!data || !data.url) throw new Error('Upload thất bại');

      $('#tbResearchImageUrl').value = data.url;
      updateImageUi(data.url);

      showNotification('Upload ảnh thành công', 'success');
    } catch (e) {
      showNotification('Upload ảnh thất bại: ' + (e && e.message ? e.message : String(e)), 'error');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const topicId = $('#tbResearchTopicSelect').value;
    const timeText = $('#tbResearchTimeText').value;
    const title = $('#tbResearchTitle').value;
    const slug = ($('#tbResearchSlug') && $('#tbResearchSlug').value) ? $('#tbResearchSlug').value : '';
    const imageUrl = $('#tbResearchImageUrl').value;
    let content = '';
    try {
      const editor = (window.tinymce && window.tinymce.get) ? window.tinymce.get('tbResearchContent') : null;
      content = editor ? editor.getContent() : $('#tbResearchContent').value;
    } catch (err) {
      showNotification('Editor chưa sẵn sàng, vui lòng thử lại sau 1-2 giây', 'error');
      return;
    }

    if (!topicId) return showNotification('Vui lòng chọn chủ đề', 'error');
    const timeErr = validateTimeText(timeText);
    if (timeErr) return showNotification(timeErr, 'error');
    if (!String(title || '').trim()) return showNotification('Tiêu đề không được để trống', 'error');
    if (!String(content || '').trim()) return showNotification('Nội dung không được để trống', 'error');

    const payload = {
      topicId: Number(topicId),
      topicTitle: findTopicTitleById(topicId),
      timeText: String(timeText).trim(),
      title: String(title).trim(),
      imageUrl: (() => {
        const direct = String(imageUrl || '').trim();
        if (direct) return direct;
        // giống mô tả UI: nếu ảnh trống thì tự lấy ảnh đầu tiên từ nội dung
        const auto = extractFirstImageUrlFromHtml(content);
        return auto || null;
      })(),
      content,
      // Slug is auto-generated from title on backend (like News).
      slug: String(slug || '').trim() || null,
    };

    try {
      if (editingId == null) {
        await fetchJson(API_ADMIN, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        showNotification('Thêm công trình thành công', 'success');
      } else {
        await fetchJson(`${API_ADMIN}/${encodeURIComponent(editingId)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        showNotification('Cập nhật công trình thành công', 'success');
      }

      closeModal();
      await loadProjects();
    } catch (e2) {
      showNotification('Lưu thất bại: ' + (e2 && e2.message ? e2.message : String(e2)), 'error');
    }
  }

  async function handleDeleteById(id) {
    // Avoid stacking overlays (list modal + confirm modal)
    closeListModal();

    showConfirm('Xóa công trình này?', async () => {
      try {
        try {
          await fetchJson(`${API_ADMIN}/${encodeURIComponent(id)}`, { method: 'DELETE' });
        } catch (eDel) {
          // Some hosting/proxies block HTTP DELETE; fallback to POST endpoint.
          await fetchJson(`${API_ADMIN}/${encodeURIComponent(id)}/delete`, { method: 'POST' });
        }
        showNotification('Xóa thành công', 'success');
        await loadProjects();
      } catch (e) {
        showNotification('Xóa thất bại: ' + (e && e.message ? e.message : String(e)), 'error');
      } finally {
        // Restore list modal so admin can continue actions
        openListModal();
      }
    });
  }

  function applyEditMode(enabled) {
    document.body.classList.toggle('tb-edit-mode', enabled);

    const toggle = $('#btnToggleEdit');
    if (toggle) toggle.textContent = enabled ? 'Tắt Edit mode' : 'Bật Edit mode';

    const addBtn = $('#tb-btn-add-research-project');
    const listBtn = $('#tb-btn-list-research-project');
    if (addBtn) addBtn.style.display = enabled ? 'flex' : 'none';
    if (listBtn) listBtn.style.display = enabled ? 'flex' : 'none';

    if (!enabled) {
      closeModal();
      closeListModal();
    }
  }

  function initEditModeToggle() {
    if (!window.__TB_IS_ADMIN) return;

    const btn = $('#btnToggleEdit');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const on = !document.body.classList.contains('tb-edit-mode');
      localStorage.setItem(EDIT_MODE_KEY, on ? '1' : '0');
      applyEditMode(on);
    });

    const restored = localStorage.getItem(EDIT_MODE_KEY) === '1';
    if (restored) applyEditMode(true);

    // Keep buttons synced if class changes elsewhere
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === 'class') {
          const enabled = document.body.classList.contains('tb-edit-mode');
          const addBtn = $('#tb-btn-add-research-project');
          const listBtn = $('#tb-btn-list-research-project');
          if (addBtn) addBtn.style.display = enabled ? 'flex' : 'none';
          if (listBtn) listBtn.style.display = enabled ? 'flex' : 'none';
        }
      }
    });
    observer.observe(document.body, { attributes: true });
  }

  function bindEvents() {
    const addBtn = $('#tb-btn-add-research-project');
    const listBtn = $('#tb-btn-list-research-project');
    const closeBtn = $('#tbResearchCloseModal');
    const closeListBtn = $('#tbResearchCloseListModal');
    const uploadBtn = $('#tbResearchUploadImageBtn');
    const form = $('#tb-research-project-form');

    const { searchInput, sortSelect, topicList } = getFilterControls();

    if (addBtn) addBtn.addEventListener('click', openCreate);
    if (listBtn) listBtn.addEventListener('click', openListModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeListBtn) closeListBtn.addEventListener('click', closeListModal);
    if (uploadBtn) uploadBtn.addEventListener('click', handleUploadImage);
    if (form) form.addEventListener('submit', handleSubmit);

    const fileInput = $('#tbResearchImageFile');
    if (fileInput) {
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          handleUploadImage();
        }
      });
    }

    const clearImageBtn = $('#tbResearchClearImageBtn');
    if (clearImageBtn) {
      clearImageBtn.addEventListener('click', () => {
        const urlEl = $('#tbResearchImageUrl');
        if (urlEl) urlEl.value = '';
        const fileEl = $('#tbResearchImageFile');
        if (fileEl) fileEl.value = '';
        updateImageUi('');
        showNotification('Đã xóa ảnh', 'success');
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        filterState.q = String(searchInput.value || '');
        applyFilters();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        filterState.sort = String(sortSelect.value || 'newest');
        applyFilters();
      });
    }

    if (topicList) {
      topicList.addEventListener('change', (e) => {
        const cb = e.target && e.target.closest ? e.target.closest('input[type="checkbox"][data-topic-id]') : null;
        if (!cb) return;
        const id = String(cb.getAttribute('data-topic-id') || '');
        if (!id) return;
        if (cb.checked) filterState.topicIds.add(id);
        else filterState.topicIds.delete(id);
        applyFilters();
      });
    }

    const list = $('#tb-research-project-admin-list');
    if (list) {
      list.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-action]');
        if (!btn) return;
        const item = e.target.closest('[data-id]');
        if (!item) return;
        const id = item.getAttribute('data-id');
        const action = btn.getAttribute('data-action');
        if (action === 'edit') {
          closeListModal();
          openEditById(id);
        }
        if (action === 'delete') {
          handleDeleteById(id);
        }
      });
    }

    // Close on overlay click
    $$('#tb-research-project-modal, #tb-research-project-list-modal').forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target !== overlay) return;
        if (overlay.id === 'tb-research-project-modal') closeModal();
        if (overlay.id === 'tb-research-project-list-modal') closeListModal();
      });
    });

    const imageUrlInput = $('#tbResearchImageUrl');
    if (imageUrlInput) {
      imageUrlInput.addEventListener('input', () => {
        const url = String(imageUrlInput.value || '').trim();
        updateImageUi(url);
      });
    }

    // Prevent navigation to detail while in edit mode.
    const listEl = $('#tb-research-project-list');
    if (listEl) {
      listEl.addEventListener('click', (e) => {
        const a = e.target && e.target.closest ? e.target.closest('a[data-research-project-link="1"]') : null;
        if (!a) return;
        if (document.body.classList.contains('tb-edit-mode')) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        const slug = a.getAttribute('data-slug');
        if (!slug) return;

        // Show detail in left column (keep right search visible)
        e.preventDefault();
        e.stopPropagation();
        navigateToDetail(slug);
        loadProjectDetail(slug);
      });
    }

    // Back to list (no full reload)
    const back = $('#tbResearchBackToList');
    if (back) {
      back.addEventListener('click', (e) => {
        if (document.body.classList.contains('tb-edit-mode')) return;
        e.preventDefault();
        e.stopPropagation();
        navigateToList();
        showDetailLayout(false);
      });
    }

    // Support browser back/forward
    window.addEventListener('popstate', () => {
      const slug = getDetailSlug();
      if (slug) {
        loadProjectDetail(slug);
      } else {
        showDetailLayout(false);
      }
    });
  }

  async function init() {
    const detailSlug = getDetailSlug();
    try {
      await loadTopics();
      await loadProjects();
    } catch (e) {
      console.error(e);
      // If admin is using editor, show a visible error instead of failing silently.
      if (window.__TB_IS_ADMIN) {
        showNotification('Không tải được dữ liệu: ' + (e && e.message ? e.message : String(e)), 'error');
      }
    }

    if (detailSlug) {
      // Replace state to keep history consistent on direct-load
      navigateToDetail(detailSlug, { replace: true });
      await loadProjectDetail(detailSlug);
    } else {
      navigateToList({ replace: true });
      showDetailLayout(false);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initEditModeToggle();
    bindEvents();
    init();

    // In case Nuxt mutates DOM after load, refresh once.
    setTimeout(() => {
      init().catch(() => {});
    }, 1200);
  });
})();
