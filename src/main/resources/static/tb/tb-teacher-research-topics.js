(() => {
  const API_LIST = '/api/teacher-research-topics';
  const API_CREATE = '/api/admin/teacher-research-topics';
  const API_UPDATE = (id) => `/api/admin/teacher-research-topics/${id}`;
  const API_DELETE = (id) => `/api/admin/teacher-research-topics/${id}`;

  const EDIT_MODE_KEY = 'tbTeacherTeacherResearchTopicEditMode';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const escapeHtml = (s) => String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  // ====== THÔNG BÁO + CONFIRM (GIỐNG STUDENT) ======
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
      z-index: 9999;
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

    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
          transform: translateX(0);
        }
        to {
          opacity: 0;
          transform: translateX(100%);
        }
      }
    `;
    document.head.appendChild(style);

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
      z-index: 10000;
      animation: fadeIn 0.2s ease-out;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
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
      if (e.target === confirmOverlay) {
        confirmOverlay.remove();
      }
    });
  }

  function notify(msg, type = 'info') {
    // Keep callers working; map info -> success-style notification
    if (type === 'error') return showNotification(msg, 'error');
    return showNotification(msg, 'success');
  }

  async function fetchJson(url, opts) {
    const res = await fetch(url, opts);
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `HTTP ${res.status}`);
    }

    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) return res.json();
    return null;
  }

  function getLocale() {
    return document.documentElement.lang || 'vi';
  }

  function topicTargetUrl(topic) {
    const id = encodeURIComponent(topic.id);
    return `/scientific-research/teacher/research-project?topicId=${id}`;
  }

  function hasAdminUi() {
    return !!$('#tb-teacher-topic-admin-bar');
  }

  function getEditMode() {
    try {
      return localStorage.getItem(EDIT_MODE_KEY) === 'true';
    } catch {
      return false;
    }
  }

  function setEditMode(enabled) {
    try {
      localStorage.setItem(EDIT_MODE_KEY, enabled ? 'true' : 'false');
    } catch {
      // ignore
    }
    applyEditMode(enabled);
  }

  function applyEditMode(enabled) {
    const toggle = $('#btnToggleTeacherTopicEdit');
    const addBtn = $('#tb-btn-add-teacher-topic');
    const listBtn = $('#tb-btn-list-teacher-topic');

    if (toggle) toggle.textContent = enabled ? 'Tắt Edit mode' : 'Bật Edit mode';
    if (addBtn) addBtn.style.display = enabled ? 'flex' : 'none';
    if (listBtn) listBtn.style.display = enabled ? 'flex' : 'none';

    if (!enabled) {
      setVisible($('#tb-teacher-topic-modal'), false);
      setVisible($('#tb-teacher-topic-list-modal'), false);
    }
  }

  function renderTopicButtons(topics) {
    const container = $('#tb-teacher-topic-buttons');
    const noData = $('#tb-teacher-topic-no-data');

    if (!container) return;

    if (!Array.isArray(topics) || topics.length === 0) {
      container.innerHTML = '';
      if (noData) noData.style.display = '';
      return;
    }

    if (noData) noData.style.display = 'none';

    container.innerHTML = topics.map(t => {
      const title = escapeHtml(t.title);
      const url = topicTargetUrl(t);
      return `
        <button type="button" class="tb-teacher-topic-btn" data-topic-id="${escapeHtml(t.id)}" data-topic-url="${escapeHtml(url)}"
          style="border-radius:20px;background:rgba(43, 74, 115, 1);border:1px solid #fff;color:#fff;padding:14px 18px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;min-height:56px;line-height:1.2;text-align:center;font-size:28px;">
          ${title}
        </button>
      `.trim();
    }).join('');

    $$('.tb-teacher-topic-btn', container).forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-topic-url');
        if (url) window.location.href = url;
      });
    });
  }

  function renderTopicListModal(topics) {
    const container = $('#tb-teacher-topic-list-content');
    if (!container) return;

    if (!Array.isArray(topics) || topics.length === 0) {
      container.innerHTML = '<div style="grid-column: 1 / -1; text-align:center; padding: 24px; color: #999;">Chưa có chủ đề nào</div>';
      return;
    }

    container.innerHTML = topics.map(t => {
      const title = escapeHtml(t.title);
      const url = topicTargetUrl(t);
      const id = escapeHtml(t.id);
      return `
        <div class="tb-teacher-topic-card" data-topic-id="${id}" data-topic-url="${escapeHtml(url)}"
          style="border:1px solid #e5e7eb; border-radius:14px; padding:14px 14px 12px; background:#fff; box-shadow:0 6px 18px rgba(0,0,0,.06);">
          <div data-action="open"
            style="font-weight:800; color: rgba(43, 74, 115, 1); line-height:1.25; cursor:pointer; user-select:none;">
            ${title}
          </div>
          <div style="margin-top:10px; display:flex; gap:8px; justify-content:flex-end;">
            <button type="button" data-action="edit"
              style="padding:8px 12px; border-radius:10px; border:1px solid #d1d5db; background:#fff; cursor:pointer; font-weight:700; color:#374151;">Chỉnh sửa</button>
            <button type="button" data-action="delete"
              style="padding:8px 12px; border-radius:10px; border:1px solid #fecaca; background:#fff; cursor:pointer; font-weight:800; color:#b91c1c;">Xóa</button>
          </div>
        </div>
      `.trim();
    }).join('');

    // Event delegation
    container.onclick = async (evt) => {
      const actionEl = evt.target.closest('[data-action]');
      const card = evt.target.closest('.tb-teacher-topic-card');
      if (!card || !actionEl) return;

      const action = actionEl.getAttribute('data-action');
      const id = card.getAttribute('data-topic-id');
      const url = card.getAttribute('data-topic-url');
      const titleText = (topics.find(x => String(x.id) === String(id))?.title || '').trim();

      if (action === 'open') {
        if (url) window.location.href = url;
        return;
      }

      if (!getEditMode()) {
        notify('Vui lòng bật Edit mode để chỉnh sửa', 'info');
        return;
      }

      if (action === 'edit') {
        // Avoid stacking 2 overlays (list modal + add/edit modal)
        window.tbCloseTeacherTopicListModal?.();
        window.tbOpenTeacherTopicModal({ id, title: titleText });
        return;
      }

      if (action === 'delete') {
        // Avoid stacking 2 overlays (list modal + confirm modal)
        window.tbCloseTeacherTopicListModal?.();

        showConfirm('Xóa chủ đề này?', async () => {
          try {
            await fetchJson(API_DELETE(id), { method: 'DELETE' });
            showNotification('Xóa chủ đề thành công', 'success');
            await loadTopics();
          } catch (e) {
            showNotification('Xóa thất bại: ' + (e && e.message ? e.message : String(e)), 'error');
          } finally {
            window.tbOpenTeacherTopicListModal?.();
          }
        });
      }
    };
  }

  async function loadTopics() {
    const locale = getLocale();
    const topics = await fetchJson(`${API_LIST}?locale=${encodeURIComponent(locale)}`);
    renderTopicButtons(topics);
    renderTopicListModal(topics);
  }

  function setVisible(el, visible) {
    if (!el) return;
    el.setAttribute('data-visible', visible ? 'true' : 'false');
  }

  window.tbOpenTeacherTopicModal = function tbOpenTeacherTopicModal() {
    const modal = $('#tb-teacher-topic-modal');
    const input = $('#tb-teacher-topic-title');
    const idInput = $('#tb-teacher-topic-id');
    const titleEl = $('#tb-teacher-topic-modal-title');
    const submitBtn = $('#tb-teacher-topic-submit-btn');

    // support edit when called with object {id,title}
    const arg = arguments && arguments.length ? arguments[0] : null;
    const isEdit = !!(arg && arg.id);

    if (idInput) idInput.value = isEdit ? String(arg.id) : '';
    if (input) input.value = isEdit ? (arg.title || '') : '';
    if (titleEl) titleEl.textContent = isEdit ? 'Chỉnh sửa chủ đề' : 'Thêm chủ đề';
    if (submitBtn) submitBtn.textContent = isEdit ? 'Cập nhật' : 'Lưu';

    setVisible(modal, true);
    setTimeout(() => input?.focus(), 50);
  };

  window.tbCloseTeacherTopicModal = function tbCloseTeacherTopicModal() {
    setVisible($('#tb-teacher-topic-modal'), false);
  };

  window.tbOpenTeacherTopicListModal = function tbOpenTeacherTopicListModal() {
    setVisible($('#tb-teacher-topic-list-modal'), true);
  };

  window.tbCloseTeacherTopicListModal = function tbCloseTeacherTopicListModal() {
    setVisible($('#tb-teacher-topic-list-modal'), false);
  };

  window.tbSubmitTeacherTopicForm = async function tbSubmitTeacherTopicForm(e) {
    e?.preventDefault?.();

    if (!getEditMode()) {
      notify('Vui lòng bật Edit mode để chỉnh sửa', 'info');
      return;
    }

    const id = ($('#tb-teacher-topic-id')?.value || '').trim();
    const title = ($('#tb-teacher-topic-title')?.value || '').trim();
    if (!title) {
      notify('Vui lòng nhập tên chủ đề', 'error');
      return;
    }

    try {
      if (id) {
        await fetchJson(API_UPDATE(id), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, locale: getLocale() })
        });
        showNotification('Cập nhật chủ đề thành công', 'success');
      } else {
        await fetchJson(API_CREATE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, locale: getLocale() })
        });
        showNotification('Thêm chủ đề thành công', 'success');
      }

      window.tbCloseTeacherTopicModal();
      await loadTopics();
    } catch (err) {
      showNotification('Lưu thất bại: ' + (err && err.message ? err.message : String(err)), 'error');
    }
  };

  document.addEventListener('DOMContentLoaded', async () => {
    if (hasAdminUi()) {
      const toggle = $('#btnToggleTeacherTopicEdit');
      if (toggle) {
        toggle.addEventListener('click', () => {
          setEditMode(!getEditMode());
        });
      }
      applyEditMode(getEditMode());
    }

    try {
      await loadTopics();
    } catch (e) {
      // If API isn't reachable yet, keep original no-data.
      console.warn(e);
    }

    // Close on backdrop click
    const modals = ['#tb-teacher-topic-modal', '#tb-teacher-topic-list-modal'];
    modals.forEach(sel => {
      const m = $(sel);
      if (!m) return;
      m.addEventListener('click', (evt) => {
        if (evt.target === m) {
          setVisible(m, false);
        }
      });
    });
  });
})();
