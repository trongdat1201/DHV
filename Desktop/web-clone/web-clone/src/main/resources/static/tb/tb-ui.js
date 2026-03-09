/* TB UI Dialogs (toast + confirm + prompt)
   - Replaces native alert()/confirm()/prompt() UX ("localhost says")
   - Usage:
       tbNotify('message', 'success'|'error'|'info')
       const ok = await tbConfirm('Are you sure?')
       const val = await tbPrompt('Enter value', 'default')
*/

(function () {
  if (window.tbNotify && window.tbConfirm && window.tbPrompt) return;

  const STATE = {
    pendingAlerts: [],
    domReady: document.readyState !== 'loading',
  };

  function onReady(fn) {
    if (STATE.domReady) return fn();
    document.addEventListener('DOMContentLoaded', function () {
      STATE.domReady = true;
      fn();
    }, { once: true });
  }

  function ensureStylesOnce() {
    if (document.getElementById('tb-ui-styles')) return;
    const style = document.createElement('style');
    style.id = 'tb-ui-styles';
    style.textContent = `
      @keyframes tbUiSlideIn { from { transform: translateX(16px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      @keyframes tbUiFadeOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(16px); } }
      @keyframes tbUiFadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes tbUiScaleIn { from { transform: scale(0.96); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    `;
    document.head.appendChild(style);
  }

  let toastTimeout = null;

  function removeEl(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function tbNotify(message, type) {
    const t = type || 'info';

    const msg = String(message == null ? '' : message);

    onReady(function () {
      ensureStylesOnce();

      // remove old
      removeEl('tb-ui-toast');
      if (toastTimeout) {
        clearTimeout(toastTimeout);
        toastTimeout = null;
      }

      const toast = document.createElement('div');
      toast.id = 'tb-ui-toast';

      const palette = {
        error: { bg: '#fef2f2', fg: '#991b1b', bd: '#fecaca', left: '#dc2626', icon: '❌', title: 'Lỗi' },
        success: { bg: '#f0fdf4', fg: '#065f46', bd: '#bbf7d0', left: '#10b981', icon: '✅', title: 'Thành công' },
        info: { bg: '#eff6ff', fg: '#1e3a8a', bd: '#bfdbfe', left: '#2563eb', icon: 'ℹ️', title: 'Thông báo' },
      };

      const p = palette[t] || palette.info;

      toast.style.cssText = [
        'position: fixed',
        'top: 20px',
        'right: 20px',
        `background-color: ${p.bg}`,
        `color: ${p.fg}`,
        `border: 1px solid ${p.bd}`,
        `border-left: 4px solid ${p.left}`,
        'padding: 14px 18px',
        'border-radius: 8px',
        'box-shadow: 0 4px 12px rgba(0,0,0,0.15)',
        'max-width: 420px',
        'min-width: 280px',
        'z-index: 2147483647',
        "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        'font-size: 14px',
        'line-height: 1.5',
        'animation: tbUiSlideIn 0.2s ease-out',
        'backdrop-filter: blur(6px)',
      ].join(';');

      toast.innerHTML = `
        <div style="display:flex;align-items:flex-start;gap:12px;">
          <div style="font-size:18px;line-height:1;">${p.icon}</div>
          <div style="flex:1;">
            <div style="font-weight:600;margin-bottom:2px;">${p.title}</div>
            <div style="word-break:break-word;">${escapeHtml(msg)}</div>
          </div>
          <button type="button" aria-label="Close" style="background:none;border:none;font-size:20px;cursor:pointer;color:#6b7280;padding:0;line-height:1;">&times;</button>
        </div>
      `;

      const closeBtn = toast.querySelector('button');
      closeBtn.addEventListener('click', function () {
        toast.style.animation = 'tbUiFadeOut 0.2s ease-out forwards';
        setTimeout(function () { toast.remove(); }, 200);
        if (toastTimeout) clearTimeout(toastTimeout);
      });

      document.body.appendChild(toast);

      toastTimeout = setTimeout(function () {
        toast.style.animation = 'tbUiFadeOut 0.2s ease-out forwards';
        setTimeout(function () { toast.remove(); }, 200);
      }, 4500);
    });
  }

  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function tbConfirm(message, opts) {
    const options = opts || {};
    const okText = options.okText || 'Xác nhận';
    const cancelText = options.cancelText || 'Hủy';

    return new Promise(function (resolve) {
      onReady(function () {
        ensureStylesOnce();

        removeEl('tb-ui-confirm');

        const overlay = document.createElement('div');
        overlay.id = 'tb-ui-confirm';
        overlay.style.cssText = [
          'position: fixed',
          'top: 0',
          'left: 0',
          'right: 0',
          'bottom: 0',
          'background-color: rgba(0,0,0,0.5)',
          'display: flex',
          'align-items: center',
          'justify-content: center',
          'z-index: 2147483646',
          'animation: tbUiFadeIn 0.15s ease-out',
        ].join(';');

        const dialog = document.createElement('div');
        dialog.style.cssText = [
          'background: #fff',
          'border-radius: 12px',
          'padding: 22px',
          'max-width: 420px',
          'width: 92%',
          'box-shadow: 0 10px 25px rgba(0,0,0,0.25)',
          'animation: tbUiScaleIn 0.18s ease-out',
        ].join(';');

        dialog.innerHTML = `
          <div style="text-align:center;margin-bottom:18px;">
            <div style="font-size:18px;margin-bottom:8px;">⚠️</div>
            <div style="font-weight:600;font-size:17px;margin-bottom:10px;color:#111827;">Xác nhận</div>
            <div style="color:#4b5563;line-height:1.5;word-break:break-word;">${escapeHtml(String(message || ''))}</div>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;">
            <button type="button" data-tb-cancel="1" style="padding:10px 14px;border:1px solid #d1d5db;background:#fff;color:#374151;border-radius:8px;cursor:pointer;font-weight:600;flex:1;">${escapeHtml(cancelText)}</button>
            <button type="button" data-tb-ok="1" style="padding:10px 14px;background:#dc2626;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:600;flex:1;">${escapeHtml(okText)}</button>
          </div>
        `;

        overlay.appendChild(dialog);
        document.body.appendChild(overlay);

        function cleanup() {
          overlay.remove();
          document.removeEventListener('keydown', onKeyDown, true);
        }

        function onKeyDown(e) {
          if (e.key === 'Escape') {
            e.preventDefault();
            cleanup();
            resolve(false);
          }
        }

        document.addEventListener('keydown', onKeyDown, true);

        overlay.addEventListener('click', function (e) {
          if (e.target === overlay) {
            cleanup();
            resolve(false);
          }
        });

        dialog.querySelector('[data-tb-cancel]').addEventListener('click', function () {
          cleanup();
          resolve(false);
        });
        dialog.querySelector('[data-tb-ok]').addEventListener('click', function () {
          cleanup();
          resolve(true);
        });
      });
    });
  }

  function tbPrompt(message, defaultValue, opts) {
    const options = opts || {};
    const okText = options.okText || 'OK';
    const cancelText = options.cancelText || 'Hủy';
    const placeholder = options.placeholder || '';

    return new Promise(function (resolve) {
      onReady(function () {
        ensureStylesOnce();

        removeEl('tb-ui-prompt');

        const overlay = document.createElement('div');
        overlay.id = 'tb-ui-prompt';
        overlay.style.cssText = [
          'position: fixed',
          'top: 0',
          'left: 0',
          'right: 0',
          'bottom: 0',
          'background-color: rgba(0,0,0,0.5)',
          'display: flex',
          'align-items: center',
          'justify-content: center',
          'z-index: 2147483646',
          'animation: tbUiFadeIn 0.15s ease-out',
        ].join(';');

        const dialog = document.createElement('div');
        dialog.style.cssText = [
          'background: #fff',
          'border-radius: 12px',
          'padding: 22px',
          'max-width: 520px',
          'width: 92%',
          'box-shadow: 0 10px 25px rgba(0,0,0,0.25)',
          'animation: tbUiScaleIn 0.18s ease-out',
        ].join(';');

        dialog.innerHTML = `
          <div style="margin-bottom:14px;">
            <div style="font-weight:600;font-size:16px;margin-bottom:8px;color:#111827;">${escapeHtml(String(message || ''))}</div>
            <input type="text" data-tb-input="1" placeholder="${escapeHtml(placeholder)}" style="width:100%;padding:10px 12px;border:1px solid #d1d5db;border-radius:8px;font-size:14px;outline:none;" />
          </div>
          <div style="display:flex;gap:10px;justify-content:center;">
            <button type="button" data-tb-cancel="1" style="padding:10px 14px;border:1px solid #d1d5db;background:#fff;color:#374151;border-radius:8px;cursor:pointer;font-weight:600;flex:1;">${escapeHtml(cancelText)}</button>
            <button type="button" data-tb-ok="1" style="padding:10px 14px;background:#1C3664;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:600;flex:1;">${escapeHtml(okText)}</button>
          </div>
        `;

        overlay.appendChild(dialog);
        document.body.appendChild(overlay);

        const input = dialog.querySelector('[data-tb-input]');
        input.value = String(defaultValue == null ? '' : defaultValue);
        setTimeout(function () { input.focus(); input.select(); }, 0);

        function cleanup() {
          overlay.remove();
          document.removeEventListener('keydown', onKeyDown, true);
        }

        function onOk() {
          const v = input.value;
          cleanup();
          resolve(v);
        }

        function onCancel() {
          cleanup();
          resolve(null);
        }

        function onKeyDown(e) {
          if (e.key === 'Escape') {
            e.preventDefault();
            onCancel();
          }
          if (e.key === 'Enter') {
            e.preventDefault();
            onOk();
          }
        }

        document.addEventListener('keydown', onKeyDown, true);

        overlay.addEventListener('click', function (e) {
          if (e.target === overlay) onCancel();
        });

        dialog.querySelector('[data-tb-cancel]').addEventListener('click', onCancel);
        dialog.querySelector('[data-tb-ok]').addEventListener('click', onOk);
      });
    });
  }

  // Expose globally
  window.tbNotify = tbNotify;
  window.tbConfirm = tbConfirm;
  window.tbPrompt = tbPrompt;

  // Replace native alert with toast to avoid "localhost says"
  try {
    window.alert = function (msg) {
      tbNotify(String(msg == null ? '' : msg), 'info');
    };
  } catch (_e) {
    // ignore
  }

  // Global error hints (avoid silent failures that only appear in Console)
  // Default: OFF (only show CRUD notifications). Enable by setting:
  //   window.__TB_SHOW_GLOBAL_ERROR_HINTS__ = true;
  // - Throttled + de-duplicated to prevent spam
  (function installGlobalErrorHints() {
    if (window.__TB_SHOW_GLOBAL_ERROR_HINTS__ !== true) return;
    if (window.__TB_GLOBAL_ERROR_HINTS__) return;
    window.__TB_GLOBAL_ERROR_HINTS__ = true;

    const shownKeys = new Set();
    let lastShownAt = 0;

    function now() {
      return Date.now ? Date.now() : new Date().getTime();
    }

    function safeStr(v) {
      try {
        if (v == null) return '';
        if (typeof v === 'string') return v;
        if (v && typeof v.message === 'string') return v.message;
        return String(v);
      } catch (_e) {
        return '';
      }
    }

    function showOnce(key, message, type) {
      const k = String(key || '').slice(0, 300);
      if (shownKeys.has(k)) return;
      // simple throttle: at most 1 toast per 1.2s
      const t = now();
      if (t - lastShownAt < 1200) return;
      lastShownAt = t;
      shownKeys.add(k);
      tbNotify(message, type || 'info');
    }

    function isLikelyNuxtAsset(url) {
      return /\/_nuxt\//i.test(url) || /__NUXT_DATA__/i.test(url);
    }

    function classifyUrl(url) {
      const u = String(url || '');
      if (!u) return null;
      if (/\/graphql(\?|$)/i.test(u)) return 'graphql';
      if (isLikelyNuxtAsset(u)) return 'nuxt';
      if (/googletagmanager\.com/i.test(u)) return 'gtm';
      if (/chat-widget\.js/i.test(u) || /aijob\.com\.vn/i.test(u)) return 'chat';
      return null;
    }

    // Capture resource load errors: script/link/img
    window.addEventListener('error', function (ev) {
      const target = ev && ev.target;
      if (!target) return;

      const url = target.src || target.href;
      const kind = classifyUrl(url);
      if (!kind) return;

      if (kind === 'nuxt') {
        showOnce('nuxt:' + url,
          'Một số file giao diện Nuxt (/_nuxt/...) không tải được trên localhost. Bạn có thể bỏ qua, phần editor/admin vẫn hoạt động.',
          'info');
      }
      if (kind === 'graphql') {
        showOnce('graphql:' + url,
          'Trang gốc dùng GraphQL (/graphql) nhưng server local không hỗ trợ nên sẽ báo lỗi. Bạn có thể bỏ qua.',
          'info');
      }
      if (kind === 'gtm') {
        showOnce('gtm:' + url,
          'GTM/Google Tag Manager không chạy trên localhost nên có thể báo lỗi tải script. Bạn có thể bỏ qua.',
          'info');
      }
      if (kind === 'chat') {
        showOnce('chat:' + url,
          'Chat widget ngoài không tồn tại trong bản clone localhost nên có thể báo lỗi. Bạn có thể bỏ qua.',
          'info');
      }
    }, true);

    // Capture promise rejections (Nuxt/Apollo often surfaces errors here)
    window.addEventListener('unhandledrejection', function (ev) {
      const msg = safeStr(ev && ev.reason);
      if (!msg) return;

      // Apollo GraphQL 405
      if (/status code\s*405/i.test(msg) && /graphql/i.test(msg)) {
        showOnce('apollo405',
          'GraphQL (/graphql) trả về 405 trên server local. Đây là lỗi của phần Nuxt gốc, không ảnh hưởng đến chức năng CRUD editor.',
          'info');
      }
    });
  })();
})();
