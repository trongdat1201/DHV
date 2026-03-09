/* TB Student Research Topics (admin add/delete)
   - Fetch topics from DB and render with existing page CSS
   - Add/delete visible only in tb edit mode (admin)
*/

(function () {
  const API_LIST = '/api/student-research-topics';
  const API_CREATE = '/api/admin/student-research-topics';
  const API_UPDATE = (id) => `/api/admin/student-research-topics/${id}`;
  const API_DELETE = (id) => `/api/admin/student-research-topics/${id}`;
  const API_UPLOAD = '/api/upload/image';

  const isAdmin = !!window.__TB_IS_ADMIN;

  // ====== CẤU HÌNH KÍCH THƯỚC ẢNH ======
  const IMAGE_CONFIG = {
    minWidth: 400,
    minHeight: 300,
    maxWidth: 2000,
    maxHeight: 1500,
    maxSizeMB: 5,
    allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
    aspectRatio: {
      min: 1.2,
      max: 2.0
    }
  };

  // ====== THÔNG BÁO TÙY CHỈNH ======
  let notificationTimeout = null;

  function showNotification(message, type = 'error') {
    // Xóa thông báo cũ nếu có
    const oldNotification = document.getElementById('tb-custom-notification');
    if (oldNotification) {
      oldNotification.remove();
      clearTimeout(notificationTimeout);
    }

    // Tạo container thông báo
    const notification = document.createElement('div');
    notification.id = 'tb-custom-notification';

    // CSS cho thông báo
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
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      animation: slideIn 0.3s ease-out;
      backdrop-filter: blur(8px);
    `;

    // Icon tương ứng
    const icon = type === 'error' ? '❌' : '✅';

    // Nội dung thông báo
    notification.innerHTML = `
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="font-size: 18px; line-height: 1;">${icon}</div>
        <div style="flex: 1;">
          <div style="font-weight: 600; margin-bottom: 4px;">
            ${type === 'error' ? 'Lỗi' : 'Thành công'}
          </div>
          <div>${message}</div>
        </div>
        <button id="tb-notification-close" 
                style="background: none; border: none; font-size: 20px; cursor: pointer; color: #666; padding: 0; line-height: 1;">
          &times;
        </button>
      </div>
    `;

    // Thêm animation CSS
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

    // Xử lý nút đóng
    const closeBtn = notification.querySelector('#tb-notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => notification.remove(), 300);
      clearTimeout(notificationTimeout);
    });

    // Tự động ẩn sau 5 giây
    notificationTimeout = setTimeout(() => {
      notification.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  function showConfirm(message, callback) {
    // Xóa confirm cũ nếu có
    const oldConfirm = document.getElementById('tb-custom-confirm');
    if (oldConfirm) oldConfirm.remove();

    // Tạo container confirm
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

    // Thêm animation CSS
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

    // Dialog confirm
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
        <div style="color: #4b5563; line-height: 1.5;">${message}</div>
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

    // Xử lý nút hủy
    document.getElementById('tb-confirm-cancel').addEventListener('click', () => {
      confirmOverlay.remove();
    });

    // Xử lý nút xóa
    document.getElementById('tb-confirm-ok').addEventListener('click', () => {
      confirmOverlay.remove();
      callback();
    });

    // Đóng khi click ra ngoài
    confirmOverlay.addEventListener('click', (e) => {
      if (e.target === confirmOverlay) {
        confirmOverlay.remove();
      }
    });
  }

  // ====== CÁC HÀM TIỆN ÍCH ======
  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function isEditMode() {
    return document.body.classList.contains('tb-edit-mode');
  }

  function getLocale() {
    const lang = (document.documentElement.getAttribute('lang') || 'vi').trim();
    return lang || 'vi';
  }

  function escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ====== VALIDATION FUNCTIONS ======
  function validateYear(input) {
    const currentYear = new Date().getFullYear();
    const yearRegex = /^(19\d{2}|20\d{2})$/;

    if (!yearRegex.test(input)) {
      return { isValid: false, message: 'Năm phải có 4 chữ số (1900-2099)' };
    }

    // const year = parseInt(input);
    // if (year < 1900 || year > currentYear + 5) {
    //   return { isValid: false, message: `Năm phải từ 1900 đến ${currentYear + 5}` };
    // }

    return { isValid: true, message: '' };
  }

  function validateDate(input) {
    const dateRegex = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/;

    if (!dateRegex.test(input)) {
      return { isValid: false, message: 'Định dạng ngày không hợp lệ. Sử dụng dd/mm/yyyy hoặc dd-mm-yyyy' };
    }

    const match = input.match(dateRegex);
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    if (month < 1 || month > 12) {
      return { isValid: false, message: 'Tháng phải từ 1 đến 12' };
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      return { isValid: false, message: `Ngày không hợp lệ cho tháng ${month}` };
    }

    // if (year < 1900) {
    //   return { isValid: false, message: 'Năm phải từ 1900 trở lên' };
    // }

    return { isValid: true, message: '' };
  }

  function validateTimePoint(input) {
    if (!input || input.trim() === '') {
      return { isValid: false, message: 'Thời gian không được để trống' };
    }

    const trimmedInput = input.trim();
    const yearRegex = /^\d{4}$/;
    const dateRegex = /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}$/;

    if (yearRegex.test(trimmedInput)) {
      return validateYear(trimmedInput);
    } else if (dateRegex.test(trimmedInput)) {
      return validateDate(trimmedInput);
    } else {
      return {
        isValid: false,
        message: 'Định dạng không hợp lệ. Sử dụng: Năm (VD: 2024) hoặc Ngày/Tháng/Năm (VD: 15/03/2024 hoặc 15-03-2024)'
      };
    }
  }

  function validateUrl(input) {
    if (!input || input.trim() === '') {
      return { isValid: true, message: '' };
    }

    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
    const relativeUrlRegex = /^(\/|\.\/|\.\.\/)[\w\/.-]+$/;

    if (urlRegex.test(input) || relativeUrlRegex.test(input)) {
      return { isValid: true, message: '' };
    }

    return { isValid: false, message: 'URL không hợp lệ. URL phải bắt đầu với http://, https:// hoặc /' };
  }

  function validateText(input, fieldName, maxLength = 500) {
    if (!input || input.trim() === '') {
      return { isValid: false, message: `${fieldName} không được để trống` };
    }

    if (input.length > maxLength) {
      return { isValid: false, message: `${fieldName} không được vượt quá ${maxLength} ký tự` };
    }

    return { isValid: true, message: '' };
  }

  function validateImageDimensions(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        const width = img.width;
        const height = img.height;
        const aspectRatio = width / height;

        if (width < IMAGE_CONFIG.minWidth) {
          reject(`Chiều rộng ảnh quá nhỏ (${width}px). Yêu cầu tối thiểu: ${IMAGE_CONFIG.minWidth}px`);
        } else if (height < IMAGE_CONFIG.minHeight) {
          reject(`Chiều cao ảnh quá nhỏ (${height}px). Yêu cầu tối thiểu: ${IMAGE_CONFIG.minHeight}px`);
        } else if (width > IMAGE_CONFIG.maxWidth) {
          reject(`Chiều rộng ảnh quá lớn (${width}px). Yêu cầu tối đa: ${IMAGE_CONFIG.maxWidth}px`);
        } else if (height > IMAGE_CONFIG.maxHeight) {
          reject(`Chiều cao ảnh quá lớn (${height}px). Yêu cầu tối đa: ${IMAGE_CONFIG.maxHeight}px`);
        } else if (aspectRatio < IMAGE_CONFIG.aspectRatio.min) {
          reject(`Tỷ lệ ảnh quá dọc (${aspectRatio.toFixed(2)}). Yêu cầu: ${IMAGE_CONFIG.aspectRatio.min.toFixed(2)} - ${IMAGE_CONFIG.aspectRatio.max.toFixed(2)}`);
        } else if (aspectRatio > IMAGE_CONFIG.aspectRatio.max) {
          reject(`Tỷ lệ ảnh quá ngang (${aspectRatio.toFixed(2)}). Yêu cầu: ${IMAGE_CONFIG.aspectRatio.min.toFixed(2)} - ${IMAGE_CONFIG.aspectRatio.max.toFixed(2)}`);
        } else {
          resolve({ width, height, aspectRatio });
        }
      };

      img.onerror = function () {
        reject('Không thể đọc kích thước ảnh');
      };

      img.src = URL.createObjectURL(file);
    });
  }

  function validateAllFields(fields) {
    const validations = [
      { field: 'title', value: fields.title, name: 'Tiêu đề', maxLength: 200 },
      { field: 'timePoint', value: fields.timePoint, name: 'Thời gian' },
      { field: 'projectName', value: fields.projectName, name: 'Tên dự án', maxLength: 200 },
      { field: 'description', value: fields.description, name: 'Mô tả', maxLength: 1000 },
      { field: 'imageUrl', value: fields.imageUrl, name: 'URL hình ảnh' }
    ];

    for (const validation of validations) {
      let result;

      if (validation.field === 'timePoint') {
        result = validateTimePoint(validation.value);
      } else if (validation.field === 'imageUrl') {
        result = validateUrl(validation.value);
      } else {
        result = validateText(validation.value, validation.name, validation.maxLength);
      }

      if (!result.isValid) {
        return result;
      }
    }

    return { isValid: true, message: '' };
  }
  // ====== END VALIDATION FUNCTIONS ======

  async function fetchJson(url, options) {
    const res = await fetch(url, options);
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `HTTP ${res.status}`);
    }
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) return res.json();
    return null;
  }

  function getLogoBgSrc() {
    const img = $('.scientific-research__student-research-topic__list-student-topic__item .logo-bg img[data-v-e13f31cf]');
    return img ? img.getAttribute('src') : '';
  }

  function getDataVAttr() {
    return 'data-v-e13f31cf';
  }

  function buildTopicItemHtml(topic, logoBgSrc) {
    const dv = getDataVAttr();

    const imageUrl = topic.imageUrl || '/assets/images/bg/student-research-topic.webp';
    const timePoint = topic.timePoint || '';
    const title = topic.title || '';
    const projectName = topic.projectName || '';
    const description = topic.description || '';

    const tooltip = escapeHtml(description.trim());

    return `
      <div class="tb-topic-outer-card" style="background: #fff; border-radius: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); padding: 18px 12px; margin-bottom: 24px;">
        <div class="scientific-research__student-research-topic__list-student-topic__item flex flex-wrap !gap-6 lg:!gap-16 tb-topic-item" ${dv} data-tb-topic-id="${escapeHtml(topic.id)}">
          <div class="tb-topic-actions" ${dv}>
            <button type="button" class="tb-topic-edit-btn tb-admin-btn" data-tb-topic-edit="1" title="Chỉnh sửa đề tài" aria-label="Chỉnh sửa đề tài" ${dv}>Chỉnh sửa</button>
            <button type="button" class="tb-topic-delete-btn tb-admin-btn" data-tb-topic-delete="1" title="Xóa đề tài" aria-label="Xóa đề tài" ${dv}>Xóa</button>
          </div>
          <div class="w-full lg:w-[38%]" ${dv}>
            <div class="thumbnail w-full flex justify-center items-center" ${dv}>
              <img class="w-full h-full object-cover" src="${escapeHtml(imageUrl)}" alt="" loading="lazy" ${dv}>
            </div>
          </div>
          <div class="content flex-1 flex-col justify-start lg:items-start" ${dv}>
            <div class="relative" ${dv}>
              ${logoBgSrc ? `
                <div class="logo-bg hidden lg:block absolute -z-10" ${dv}>
                  <img class="opacity-5 w-full inline-block aspect-[117/174]" src="${escapeHtml(logoBgSrc)}" alt="" loading="lazy" ${dv}>
                </div>
              ` : ''}
              <div class="time-point font-bold" ${dv}>${escapeHtml(timePoint)}</div>
              <div class="topic-name font-bold mb-2" ${dv}>${escapeHtml(title)}</div>
              <div class="flex items-center mb-2" ${dv}>
                <span class="topic-field-dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#d1d5db;margin-right:10px;"></span>
                <div class="topic-author font-medium" ${dv}>${escapeHtml(projectName)}</div>
              </div>
             <div class="flex items-start mt-2" ${dv}>
                <span class="topic-field-dot" style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#d1d5db; margin-right:12px; flex-shrink:0; margin-top:14px;"></span>
                
                <div class="topic-achievement flex-1" ${dv} style="background-color: #f4f5f7; border-radius: 12px; padding: 12px 16px; max-height: 150px !important; overflow-y: auto !important;">
                  <p ${dv} style="white-space: normal !important; word-wrap: break-word; word-break: break-word; margin: 0; line-height: 1.6; color: #374151; font-weight: 500; display: block !important; overflow: visible !important; text-overflow: clip !important; -webkit-line-clamp: unset !important; -webkit-box-orient: unset !important; height: auto !important; max-height: none !important;" data-tb-auto-tooltip="1">${escapeHtml(description)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function ensureAdminControls(listRoot) {
    if (!isAdmin) return;

    let admin = $('#tb-student-topic-admin', listRoot);
    if (!admin) {
      admin = document.createElement('div');
      admin.id = 'tb-student-topic-admin';
      admin.className = 'tb-student-topic-admin tb-student-topic-fab';
      admin.innerHTML = `<button id="tb-btn-add-topic" type="button" class="tb-student-topic-fab__btn" aria-label="Thêm đề tài">+</button><button id="tb-btn-list-topic" type="button" class="tb-student-topic-fab__btn" aria-label="Xem danh sách">☰</button>`;
      listRoot.prepend(admin);
    }

    const btn = $('#tb-btn-add-topic', admin);
    if (btn && !btn.__tbBound) {
      btn.__tbBound = true;
      btn.addEventListener('click', () => {
        if (!isEditMode()) return;
        openTopicModal(listRoot, { mode: 'create' });
      });
    }

    const btnList = $('#tb-btn-list-topic', admin);
    if (btnList && !btnList.__tbBound) {
      btnList.__tbBound = true;
      btnList.addEventListener('click', () => {
        if (!isEditMode()) return;
        openTopicListModal(listRoot);
      });
    }
  }

  function ensureDynamicContainer(listRoot) {
    let container = $('#tb-student-topic-dynamic', listRoot);
    if (!container) {
      container = document.createElement('div');
      container.id = 'tb-student-topic-dynamic';
      listRoot.append(container);
    }
    return container;
  }

  async function loadAndRender(listRoot) {
    const dyn = ensureDynamicContainer(listRoot);
    const locale = getLocale();

    let topicsById = Object.create(null);

    let topics = [];
    try {
      topics = await fetchJson(`${API_LIST}?locale=${encodeURIComponent(locale)}`);
    } catch (e) {
      console.warn('[tb-student-topics] list failed:', e);
      return;
    }

    if (!Array.isArray(topics)) return;

    topics.forEach(t => {
      if (t && t.id != null) topicsById[String(t.id)] = t;
    });
    dyn.__tbTopicsById = topicsById;

    const logoBgSrc = getLogoBgSrc();

    // ==========================================
    // LOGIC PHÂN TRANG MỚI (CHỈ HIỆN 3 ĐỀ TÀI)
    // ==========================================
    const ITEMS_PER_PAGE = 3; // Giới hạn 3 bài 1 trang
    let currentPage = 1;

    function renderPage(page) {
      currentPage = page;
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const currentTopics = topics.slice(startIndex, startIndex + ITEMS_PER_PAGE);

      // 1. Render HTML cho 3 bài của trang hiện tại
      let html = currentTopics.map(t => buildTopicItemHtml(t, logoBgSrc)).join('');

      // 2. Render các dấu chấm phân trang (chỉ hiện khi có > 3 bài)
      const totalPages = Math.ceil(topics.length / ITEMS_PER_PAGE);
      if (totalPages > 1) {
        html += `<div style="display: flex; justify-content: center; gap: 12px; margin-top: 10px; margin-bottom: 24px;">`;
        for (let i = 1; i <= totalPages; i++) {
          const isActive = (i === currentPage);
          // Nút active màu xám đậm hơn (#9ca3af), nút thường màu xám nhạt (#e5e7eb)
          const bgColor = isActive ? '#9ca3af' : '#e5e7eb'; 
          html += `
            <span class="tb-dot-page" data-page="${i}" style="
              width: 12px; 
              height: 12px; 
              border-radius: 50%; 
              background-color: ${bgColor}; 
              cursor: pointer; 
              transition: all 0.2s ease-in-out;
            " title="Trang ${i}"></span>
          `;
        }
        html += `</div>`;
      }

      // Đổ HTML vào container
      dyn.innerHTML = html;

      // 3. Gắn sự kiện click cho các dấu chấm
      $all('.tb-dot-page', dyn).forEach(dot => {
        dot.addEventListener('click', (e) => {
          const selectedPage = parseInt(e.target.getAttribute('data-page'));
          renderPage(selectedPage); // Gọi lại hàm để vẽ trang mới
        });
      });

      // 4. Gắn lại sự kiện Sửa/Xóa cho các bài vừa hiển thị
      bindAdminEvents();
    }

    function bindAdminEvents() {
      if (!isAdmin) return;

      $all('[data-tb-topic-edit]', dyn).forEach(btn => {
        if (btn.__tbBound) return;
        btn.__tbBound = true;
        btn.addEventListener('click', async (ev) => {
          if (!isEditMode()) return;
          const item = ev.currentTarget.closest('[data-tb-topic-id]');
          const id = item ? item.getAttribute('data-tb-topic-id') : null;
          if (!id) return;

          const topic = (dyn.__tbTopicsById && dyn.__tbTopicsById[String(id)]) || null;
          if (!topic) return;

          openTopicModal(listRoot, { mode: 'edit', topic });
        });
      });

      $all('[data-tb-topic-delete]', dyn).forEach(btn => {
        if (btn.__tbBound) return;
        btn.__tbBound = true;
        btn.addEventListener('click', async (ev) => {
          if (!isEditMode()) return;
          const item = ev.currentTarget.closest('[data-tb-topic-id]');
          const id = item ? item.getAttribute('data-tb-topic-id') : null;
          if (!id) return;

          // Sử dụng confirm dialog custom
          showConfirm('Xóa đề tài này?', async () => {
            try {
              await fetchJson(API_DELETE(id), { method: 'DELETE' });
              showNotification('Xóa đề tài thành công', 'success');
              await loadAndRender(listRoot);
            } catch (e) {
              showNotification('Xóa thất bại: ' + (e && e.message ? e.message : String(e)), 'error');
            }
          });
        });
      });
    }

    // Kích hoạt render trang đầu tiên ngay khi tải dữ liệu xong
    renderPage(1);
  }

  function closeOverlay(overlay) {
    if (!overlay) return;
    overlay.remove();
  }

  async function uploadFile(file) {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch(API_UPLOAD, { method: 'POST', body: fd });
    if (!res.ok) {
      const errorText = await res.text().catch(() => '');
      throw new Error(errorText || `Upload failed with status ${res.status}`);
    }
    const json = await res.json();
    if (!json || !json.url) throw new Error('Upload response invalid');
    return json.url;
  }

  function openTopicModal(listRoot, opts) {
    const mode = (opts && opts.mode) || 'create';
    const topic = (opts && opts.topic) || null;
    const isEditing = mode === 'edit' && topic && topic.id != null;

    const overlay = document.createElement('div');
    overlay.id = 'tb-topic-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2147483647;
      pointer-events: auto;
      animation: fadeIn 0.2s ease-out;
    `;

    overlay.innerHTML = `
      <div id="tb-topic-modal" role="dialog" aria-modal="true" style="
        background: white;
        border-radius: 12px;
        max-width: 900px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
        animation: scaleIn 0.3s ease-out;
      ">
        <div class="tb-modal-head" style="
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <div class="tb-modal-title" style="
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
          ">${isEditing ? 'Chỉnh sửa đề tài nghiên cứu' : 'Thêm đề tài nghiên cứu'}</div>
          <div class="tb-modal-actions" style="display: flex; gap: 12px;">
            <button type="button" class="tb-btn" data-tb-cancel="1" style="
              padding: 8px 16px;
              background-color: white;
              color: #4b5563;
              border: 1px solid #d1d5db;
              border-radius: 6px;
              cursor: pointer;
              font-weight: 500;
              transition: all 0.2s;
            ">Hủy</button>
            <button type="button" class="tb-btn primary" data-tb-save="1" style="
              padding: 8px 16px;
              background-color: #1C3664;
              color: white;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-weight: 500;
              transition: all 0.2s;
            ">${isEditing ? 'Cập nhật' : 'Lưu'}</button>
          </div>
        </div>
        <div class="tb-modal-body" style="padding: 24px;">
          <div class="tb-topic-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            
            <div class="tb-topic-col">
              <label class="tb-label" style="display: block; font-weight: 500; margin-bottom: 8px; color: #374151;">Hình ảnh (tùy chọn)</label>
              
              <div style="display: flex; gap: 8px; margin-bottom: 12px;">
                <button type="button" class="tb-img-tab active" data-tab="upload" style="flex: 1; padding: 8px; background: #2f4b7c; color: white; border: 1px solid #2f4b7c; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; font-weight: 500; transition: all 0.2s;">
                  <span style="font-size: 16px;">📤</span> Tải lên
                </button>
                <button type="button" class="tb-img-tab" data-tab="paste" style="flex: 1; padding: 8px; background: white; color: #6b7280; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; font-weight: 500; transition: all 0.2s;">
                  <span style="font-size: 16px;">📋</span> Dán ảnh
                </button>
                <button type="button" class="tb-img-tab" data-tab="url" style="flex: 1; padding: 8px; background: white; color: #6b7280; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; font-weight: 500; transition: all 0.2s;">
                  <span style="font-size: 16px;">🔗</span> URL ảnh
                </button>
              </div>

              <div id="tab-upload" class="tb-img-content" style="display: block; margin-bottom: 16px;">
                <div style="background: #f4f5f7; border: 1px dashed #cbd5e1; border-radius: 6px; padding: 12px; display: flex; align-items: center;">
                  <input type="file" class="tb-file" accept="image/*" data-tb-image-file="1" style="width: 100%; font-size: 14px; cursor: pointer; background: transparent;" />
                </div>
                <div style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 8px;">Hỗ trợ JPG, PNG, GIF, WebP (Max ${IMAGE_CONFIG.maxSizeMB}MB)</div>
              </div>

              <div id="tab-paste" class="tb-img-content" style="display: none; margin-bottom: 16px;">
                <div id="tb-paste-area" tabindex="0" style="background: #f4f5f7; border: 2px dashed #9ca3af; border-radius: 6px; padding: 40px 12px; text-align: center; cursor: text; outline: none; transition: all 0.2s;">
                  <span style="color: #6b7280; font-size: 14px;">Click vào đây và nhấn <b>Ctrl+V</b> để dán ảnh</span>
                </div>
              </div>

              <div id="tab-url" class="tb-img-content" style="display: none; margin-bottom: 16px;">
                <input type="text" id="tb-url-input" placeholder="Dán đường dẫn (link) hình ảnh vào đây..." style="width: 100%; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; outline: none;" />
              </div>

              <input type="hidden" data-tb-image-url="1" />

              <div class="tb-topic-preview" data-tb-preview="1" style="
                margin-bottom: 16px;
                min-height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: transparent;
                border: 2px dashed #cbd5e1;
                border-radius: 8px;
                padding: 4px;
              "></div>
              
              <div class="tb-image-requirements" style="
                background-color: #f8fafc;
                border-left: 4px solid #1C3664;
                padding: 12px;
                border-radius: 6px;
                font-size: 13px;
                color: #4b5563;
                flex: 0 0 auto;
                align-self: flex-start;
                height: fit-content;
              ">
                <div style="font-weight: 550; margin-bottom: 4px;">Yêu cầu hình ảnh:</div>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Định dạng: JPG, PNG, GIF, WebP</li>
                  <li>Kích thước file: ≤ ${IMAGE_CONFIG.maxSizeMB}MB</li>
                  <li>Kích thước ảnh: ${IMAGE_CONFIG.minWidth}×${IMAGE_CONFIG.minHeight}px - ${IMAGE_CONFIG.maxWidth}×${IMAGE_CONFIG.maxHeight}px</li>
                  <li>Tỷ lệ: ${IMAGE_CONFIG.aspectRatio.min.toFixed(2)} - ${IMAGE_CONFIG.aspectRatio.max.toFixed(2)}</li>
                </ul>
              </div>
            </div>

            <div class="tb-topic-col">
              <label class="tb-label" style="display: block; font-weight: 500; margin-bottom: 8px; color: #374151;">Tiêu đề *</label>
              <input type="text" class="tb-input" data-tb-title="1" placeholder="GIẢI NHẤT - CUỘC THI..." maxlength="200" style="
                width: 100%;
                padding: 8px 12px;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                font-size: 14px;
                margin-bottom: 16px;
              " />

              <label class="tb-label" style="display: block; font-weight: 500; margin-bottom: 8px; color: #374151;">Thời gian *</label>
              <input type="text" class="tb-input" data-tb-time="1" placeholder="2024 hoặc 15/03/2024" 
                title="Định dạng: Năm (2024) hoặc Ngày/Tháng/Năm (15/03/2024 hoặc 15-03-2024)" style="
                width: 100%;
                padding: 8px 12px;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                font-size: 14px;
                margin-bottom: 16px;
              " />

              <label class="tb-label" style="display: block; font-weight: 500; margin-bottom: 8px; color: #374151;">Dự án *</label>
              <input type="text" class="tb-input" data-tb-project="1" placeholder="Dự án &quot;...&quot;" maxlength="200" style="
                width: 100%;
                padding: 8px 12px;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                font-size: 14px;
                margin-bottom: 16px;
              " />

              <label class="tb-label" style="display: block; font-weight: 500; margin-bottom: 8px; color: #374151;">Mô tả *</label>
              <textarea class="tb-input" rows="4" data-tb-desc="1" placeholder="Mô tả/Thành tích..." maxlength="1000" style="
                width: 100%;
                padding: 8px 12px;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                font-size: 14px;
                resize: vertical;
              "></textarea>
            </div>
          </div>
          <div class="tb-validation-notes" style="
            margin-top: 20px;
            padding-top: 16px;
            border-top: 1px solid #e5e7eb;
            font-size: 13px;
            color: #6b7280;
          "></div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Thêm animation CSS nếu chưa có
    if (!document.querySelector('#tb-modal-animations')) {
      const style = document.createElement('style');
      style.id = 'tb-modal-animations';
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    const inputImageUrl = $('[data-tb-image-url]', overlay);
    const inputFile = $('[data-tb-image-file]', overlay);
    const preview = $('[data-tb-preview]', overlay);
    const inputTitle = $('[data-tb-title]', overlay);
    const inputTime = $('[data-tb-time]', overlay);
    const inputProject = $('[data-tb-project]', overlay);
    const inputDesc = $('[data-tb-desc]', overlay);

    // === XỬ LÝ GIAO DIỆN PREVIEW ===
    function setPreview(url) {
      if (!preview) return;
      preview.style.border = url ? 'none' : '2px dashed #cbd5e1';
      preview.innerHTML = '';
      if (url) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'preview';
        img.style.cssText = 'max-width: 100%; max-height: 200px; border-radius: 6px; object-fit: contain;';
        img.onerror = function () { preview.innerHTML = ''; preview.style.border = '2px dashed #cbd5e1'; };
        preview.appendChild(img);
      }
    }

    // === XỬ LÝ CHUYỂN TAB (UPLOAD / DÁN / URL) ===
    const tabs = $all('.tb-img-tab', overlay);
    const contents = $all('.tb-img-content', overlay);
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Reset CSS tất cả tab
        tabs.forEach(t => {
          t.style.background = 'white';
          t.style.color = '#6b7280';
          t.style.borderColor = '#d1d5db';
        });
        contents.forEach(c => c.style.display = 'none');

        // Active tab được chọn
        tab.style.background = '#2f4b7c';
        tab.style.color = 'white';
        tab.style.borderColor = '#2f4b7c';

        // Hiển thị nội dung tương ứng
        const targetId = 'tab-' + tab.getAttribute('data-tab');
        const targetContent = $('#' + targetId, overlay);
        if (targetContent) targetContent.style.display = 'block';
      });
    });

    // === XỬ LÝ SỰ KIỆN DÁN ẢNH (CTRL+V) ===
    const pasteArea = $('#tb-paste-area', overlay);
    if (pasteArea) {
      pasteArea.addEventListener('paste', async (e) => {
        e.preventDefault();
        const items = (e.clipboardData || e.originalEvent.clipboardData).items;
        let imageFile = null;
        
        for (let item of items) {
          if (item.type.indexOf('image') === 0) {
            imageFile = item.getAsFile();
            break;
          }
        }

        if (imageFile) {
          try {
            pasteArea.innerHTML = '<span style="color: #2f4b7c; font-weight: bold;">⏳ Đang tải ảnh lên...</span>';
            // Gọi hàm upload có sẵn của bạn
            const url = await uploadFile(imageFile);
            inputImageUrl.value = url;
            setPreview(url);
            showNotification('Dán và tải ảnh thành công!', 'success');
            pasteArea.innerHTML = '<span style="color: #10b981; font-weight: bold;">✅ Đã tải xong! Ctrl+V để thay ảnh khác.</span>';
          } catch (error) {
            showNotification(`Lỗi dán ảnh: ${error}`, 'error');
            pasteArea.innerHTML = '<span style="color: #ef4444; font-weight: bold;">❌ Lỗi! Click và nhấn Ctrl+V thử lại</span>';
          }
        } else {
          showNotification('Không tìm thấy hình ảnh trong bộ nhớ tạm!', 'error');
        }
      });
    }

    const initialImageUrl = isEditing ? (topic.imageUrl || '') : '';
    if (inputImageUrl) inputImageUrl.value = initialImageUrl;

    // === XỬ LÝ SỰ KIỆN NHẬP URL ===
    const urlInput = $('#tb-url-input', overlay);
    let typingTimer;
    if (urlInput) {
      // Khi edit, nếu đã có URL thì điền sẵn vào ô này
      if (initialImageUrl) urlInput.value = initialImageUrl;

      urlInput.addEventListener('input', () => {
        clearTimeout(typingTimer);
        // Đợi user gõ xong (500ms) thì mới load Preview
        typingTimer = setTimeout(() => {
          const val = urlInput.value.trim();
          inputImageUrl.value = val;
          setPreview(val);
        }, 500);
      });
    }

    if (inputFile) {
      inputFile.addEventListener('change', async () => {
        const file = inputFile.files && inputFile.files[0];
        if (!file) return;

        // Validate file type
        if (!IMAGE_CONFIG.allowedTypes.includes(file.type)) {
          showNotification(`Chỉ chấp nhận file ảnh: ${IMAGE_CONFIG.allowedTypes.join(', ')}`, 'error');
          inputFile.value = '';
          return;
        }

        // Validate file size
        const maxSize = IMAGE_CONFIG.maxSizeMB * 1024 * 1024;
        if (file.size > maxSize) {
          showNotification(`Kích thước file không được vượt quá ${IMAGE_CONFIG.maxSizeMB}MB`, 'error');
          inputFile.value = '';
          return;
        }

        // Hiển thị preview ngay lập tức (URL.createObjectURL) trước khi upload
        let objectUrl = null;
        try {
          objectUrl = URL.createObjectURL(file);
          setPreview(objectUrl);
        } catch (_) {}

        try {
          // Validate image dimensions
          await validateImageDimensions(file);

          // Upload file
          inputFile.disabled = true;
          const url = await uploadFile(file);
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          if (inputImageUrl) inputImageUrl.value = url;
          setPreview(url);
        } catch (error) {
          if (objectUrl) URL.revokeObjectURL(objectUrl);
          setPreview('');
          showNotification(`Upload thất bại: ${error}`, 'error');
          inputFile.value = '';
        } finally {
          inputFile.disabled = false;
        }
      });
    }

    if (isEditing) {
      if (inputTitle) inputTitle.value = topic.title || '';
      if (inputTime) inputTime.value = topic.timePoint || '';
      if (inputProject) inputProject.value = topic.projectName || '';
      if (inputDesc) inputDesc.value = topic.description || '';
    } else {
      if (inputTitle) inputTitle.value = '';
      if (inputTime) inputTime.value = '';
      if (inputProject) inputProject.value = '';
      if (inputDesc) inputDesc.value = '';
    }

    setPreview(initialImageUrl);

    function onCancel() {
      overlay.style.animation = 'fadeOut 0.3s ease-out forwards';
      overlay.style.pointerEvents = 'none';
      setTimeout(() => {
        if (overlay.parentNode) overlay.remove();
      }, 300);
    }

    async function onSave() {
      const locale = isEditing ? ((topic.locale || '').trim() || getLocale()) : getLocale();

      const payload = {
        locale,
        imageUrl: (inputImageUrl && inputImageUrl.value || '').trim(),
        title: (inputTitle && inputTitle.value || '').trim(),
        timePoint: (inputTime && inputTime.value || '').trim(),
        projectName: (inputProject && inputProject.value || '').trim(),
        description: (inputDesc && inputDesc.value || '').trim()
      };

      const validation = validateAllFields(payload);
      if (!validation.isValid) {
        showNotification(validation.message, 'error');
        return;
      }

      const saveBtn = $('[data-tb-save]', overlay);
      try {
        if (saveBtn) saveBtn.disabled = true;
        if (isEditing) {
          await fetchJson(API_UPDATE(topic.id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          showNotification('Cập nhật đề tài thành công', 'success');
        } else {
          await fetchJson(API_CREATE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          showNotification('Thêm đề tài thành công', 'success');
        }

        onCancel();
        await loadAndRender(listRoot);
      } catch (e) {
        showNotification('Lưu thất bại: ' + (e && e.message ? e.message : String(e)), 'error');
      } finally {
        if (saveBtn) saveBtn.disabled = false;
      }
    }

    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay) {
        onCancel();
        return;
      }
      if (ev.target.closest && ev.target.closest('[data-tb-cancel]')) {
        ev.preventDefault();
        ev.stopPropagation();
        onCancel();
        return;
      }
      if (ev.target.closest && ev.target.closest('[data-tb-save]')) {
        ev.preventDefault();
        ev.stopPropagation();
        onSave();
      }
    });
  }

  async function openTopicListModal(listRoot) {
    const overlay = document.createElement('div');
    overlay.id = 'tb-topic-list-overlay';
    overlay.style.cssText = `
      position: fixed; inset: 0; background: rgba(0,0,0,0.5);
      display: flex; align-items: center; justify-content: center; z-index: 9998;
      animation: fadeIn 0.2s ease-out;
    `;

    overlay.innerHTML = `
      <div id="tb-topic-list-modal" role="dialog" aria-modal="true" style="
        background: white; border-radius: 12px; max-width: 900px; width: 90%;
        max-height: 85vh; overflow: hidden; display: flex; flex-direction: column;
        box-shadow: 0 20px 25px rgba(0,0,0,0.1); animation: scaleIn 0.3s ease-out;
      ">
        <div style="padding: 20px 24px; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center;">
          <h2 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">Danh sách đề tài nghiên cứu</h2>
          <button type="button" data-tb-list-close="1" style="
            background: #f3f4f6; border: none; font-size: 24px; cursor: pointer; color: #6b7280;
            width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          " aria-label="Đóng">&times;</button>
        </div>
        <div id="tb-topic-list-content" style="padding: 20px 24px; overflow-y: auto; flex: 1;">
          <div style="text-align: center; padding: 40px 20px; color: #6b7280;">Đang tải...</div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    function closeListModal() {
      overlay.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => overlay.remove(), 300);
    }

    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay || ev.target.closest('[data-tb-list-close]')) {
        closeListModal();
      }
    });

    const content = $('#tb-topic-list-content', overlay);
    const locale = getLocale();

    try {
      const topics = await fetchJson(`${API_LIST}?locale=${encodeURIComponent(locale)}`);
      if (!Array.isArray(topics) || topics.length === 0) {
        content.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 32px;">Chưa có đề tài nào.</p>';
        return;
      }

      let html = '<div style="display: flex; flex-direction: column; gap: 16px;">';

      topics.forEach((t) => {
        const imageUrl = t.imageUrl || '/assets/images/bg/student-research-topic.webp';
        html += `
          <div class="tb-topic-list-card" data-topic-id="${escapeHtml(t.id)}" style="
            border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; display: flex; gap: 16px; align-items: flex-start;
          ">
            <div style="width: 80px; height: 80px; flex-shrink: 0; border-radius: 8px; overflow: hidden; background: #f3f4f6;">
              <img src="${escapeHtml(imageUrl)}" alt="" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
            </div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-weight: 600; font-size: 15px; color: #1f2937; margin-bottom: 4px;">${escapeHtml(t.title || '')}</div>
              <div style="font-size: 13px; color: #6b7280; margin-bottom: 4px;">${escapeHtml(t.timePoint || '')} • ${escapeHtml(t.projectName || '')}</div>
              <div style="font-size: 13px; color: #4b5563; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${escapeHtml((t.description || '').substring(0, 150))}${(t.description || '').length > 150 ? '...' : ''}</div>
            </div>
            <div style="display: flex; gap: 8px; flex-shrink: 0;">
              <button type="button" data-tb-list-edit="1" data-topic-id="${escapeHtml(t.id)}" style="
                padding: 8px 14px; border-radius: 8px; border: 1px solid #2b4a73; background: #fff; color: #2b4a73;
                cursor: pointer; font-weight: 600; font-size: 13px;
              ">Sửa</button>
              <button type="button" data-tb-list-delete="1" data-topic-id="${escapeHtml(t.id)}" style="
                padding: 8px 14px; border-radius: 8px; border: 1px solid #ef4444; background: #fff; color: #ef4444;
                cursor: pointer; font-weight: 600; font-size: 13px;
              ">Xóa</button>
            </div>
          </div>
        `;
      });

      html += '</div>';
      content.innerHTML = html;

      content.querySelectorAll('[data-tb-list-edit]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-topic-id');
          const topic = topics.find((x) => String(x.id) === String(id));
          if (topic) {
            closeListModal();
            openTopicModal(listRoot, { mode: 'edit', topic });
          }
        });
      });

      content.querySelectorAll('[data-tb-list-delete]').forEach((btn) => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-topic-id');
          const topic = topics.find((x) => String(x.id) === String(id));
          if (!topic) return;

          showConfirm('Xóa đề tài này?', async () => {
            try {
              await fetchJson(API_DELETE(id), { method: 'DELETE' });
              showNotification('Xóa đề tài thành công', 'success');
              closeListModal();
              await loadAndRender(listRoot);
              openTopicListModal(listRoot);
            } catch (e) {
              showNotification('Xóa thất bại: ' + (e && e.message ? e.message : String(e)), 'error');
            }
          });
        });
      });
    } catch (e) {
      content.innerHTML = '<p style="text-align: center; color: #ef4444; padding: 32px;">Không tải được danh sách đề tài.</p>';
    }
  }

  function init() {
    const listRoot = $('#tb-student-topic-list') || $('.scientific-research__student-research-topic__list-student-topic[data-v-e13f31cf]');
    if (!listRoot) return;

    ensureAdminControls(listRoot);
    loadAndRender(listRoot);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();