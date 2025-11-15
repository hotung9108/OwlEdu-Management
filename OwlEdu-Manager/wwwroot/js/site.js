const themes = {
    light: {
        "--primary": "#4F46E5",
        "--primary-hover": "#4338CA",
        "--secondary": "#10B981",
        "--bg": "#F9FAFB",
        "--surface": "#FFFFFF",
        "--text-main": "#111827",
        "--text-muted": "#4B5563",
        "--text-reverse": "#FFFFFF",
        "--border": "#E5E7EB",
        "--error": "#EF4444",
        "--warning": "#FBBF24",
        "--info": "#60A5FA",
    },
    dark: {
        "--primary": "#818CF8",
        "--primary-hover": "#A5B4FC",
        "--secondary": "#34D399",
        "--bg": "#0F172A",
        "--surface": "#1E293B",
        "--text-main": "#F3F4F6",
        "--text-muted": "#9CA3AF",
        "--text-reverse": "#111827",
        "--border": "#374151",
        "--error": "#F87171",
        "--warning": "#FCD34D",
        "--info": "#93C5FD",
    }
};

function setTheme(mode) {
    if (!themes[mode]) return;
    const root = document.documentElement;
    Object.entries(themes[mode]).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });

    // Lưu lại theme vào localStorage (nếu muốn)
    localStorage.setItem("theme", mode);
}

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
});

function toggleTheme() {
    const current = localStorage.getItem("theme") || "light";
    const next = current === "light" ? "dark" : "light";
    setTheme(next);
}

//On get components
document.addEventListener('DOMContentLoaded', function () {
    htmx.onLoad(function (el) {
        el = el.parentElement;
        if (el.classList && el.classList.contains('component-container')) {
            const fnName = el.getAttribute('data-on-load');
            if (fnName && typeof window[fnName] === 'function') {
                $('.datagrid-container').each(function () {
                    const $container = $(this);
                    const $table = $container.find('.datagrid');

                    updateDatagridLayout($container);
                    makeDatagridSortable($table);

                    $(window).on('resize', () => updateDatagridLayout($container));
                });
                window[fnName]();
            }
        }
    });
});

//Pagination Function

function renderPagination(containerId, totalPages, onPageChangeName, maxVisible = 5) {
    const $container = $('#' + containerId);
    $container.empty();

    let currentPage = $container.data('current-page') || 1;

    // Hàm gọi callback
    function triggerCallback() {
        if (typeof window[onPageChangeName] === 'function') {
            window[onPageChangeName](currentPage); // PASS current page
        }
    }

    // Prev
    const $prev = $('<button>').addClass('page-btn prev').text('«');
    if (currentPage === 1) $prev.prop('disabled', true);
    $container.append($prev);

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    // Nút "1 ..."
    if (startPage > 1) {
        const $first = $('<button>').addClass('page-btn').text(1);
        $container.append($first);
        if (startPage > 2) $container.append('<span class="dots">...</span>');
    }

    // Nút số trang
    for (let i = startPage; i <= endPage; i++) {
        const $btn = $('<button>').addClass('page-btn').text(i);
        if (i === currentPage) $btn.addClass('active');
        $container.append($btn);
    }

    // Nút "... last"
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) $container.append('<span class="dots">...</span>');
        const $last = $('<button>').addClass('page-btn').text(totalPages);
        $container.append($last);
    }

    // Next
    const $next = $('<button>').addClass('page-btn next').text('»');
    if (currentPage === totalPages) $next.prop('disabled', true);
    $container.append($next);

    // CLICK NUMBER BUTTON
    $container.find('.page-btn').not('.prev,.next').click(function () {
        currentPage = parseInt($(this).text());
        $container.data('current-page', currentPage);

        renderPagination(containerId, totalPages, onPageChangeName, maxVisible);

        triggerCallback();
    });

    // CLICK PREV
    $prev.click(function () {
        if (currentPage > 1) {
            currentPage--;
            $container.data('current-page', currentPage);

            renderPagination(containerId, totalPages, onPageChangeName, maxVisible);

            triggerCallback();
        }
    });

    // CLICK NEXT
    $next.click(function () {
        if (currentPage < totalPages) {
            currentPage++;
            $container.data('current-page', currentPage);

            renderPagination(containerId, totalPages, onPageChangeName, maxVisible);

            triggerCallback();
        }
    });
}

//Modal Function

function ActiveModal(modalId, title, content) {
    var $modal = document.getElementById(modalId);
    if (!$modal) return;

    // Set title & content
    $modal.querySelector('.btl-modal-title').innerText = title;
    $modal.querySelector('.btl-modal-content').innerText = content;

    // Hiển thị modal
    $modal.classList.add('btl-modal-active');

    // Gán sự kiện nút Close
    $modal.querySelector('.btl-btn-close').onclick = function () {
        CloseModal(modalId);
    };

    // Có thể click ra ngoài backdrop cũng đóng modal
    $modal.onclick = function (e) {
        if (e.target === $modal) {
            CloseModal(modalId);
        }
    };
}

function CloseModal(modalId) {
    var $modal = document.getElementById(modalId);
    if (!$modal) return;
    $modal.classList.remove('btl-modal-active');
}

// Hàm cập nhật layout cho 1 table/container

function updateDatagridLayout($container) {
    const $table = $container.find('.datagrid');
    const $cols = $table.find('thead th');
    const containerWidth = $container.width();

    // Reset để lấy kích thước tự nhiên
    $cols.css('min-width', 'auto');
    $table.css('width', 'auto');

    // Đo chiều rộng tự nhiên từng cột
    const naturalWidths = $cols.map(function (i, th) {
        let max = $(th).outerWidth();
        $table.find('tbody tr').each(function () {
            const w = $(this).find('td').eq(i).outerWidth();
            if (w > max) max = w;
        });
        return max;
    }).get();

    // Gán min-width cho từng cột
    $cols.each(function (i) { $(this).css('min-width', naturalWidths[i] + 'px'); });
    $table.find('tbody tr').each(function () {
        $(this).find('td').each(function (i) {
            $(this).css('min-width', naturalWidths[i] + 'px');
        });
    });

    // Quyết định fill hay fit
    const tableWidth = $table.outerWidth();
    $table.css('width', tableWidth < containerWidth ? '100%' : 'auto');
}

// Hàm sắp xếp 1 bảng
function makeDatagridSortable($table) {
    $table.find('th').click(function () {
        const index = $(this).index();
        const type = $(this).data('sort');
        const $tbody = $table.find('tbody');
        const rows = $tbody.find('tr').toArray();

        const sorted = rows.sort(function (a, b) {
            const aText = $(a).find('td').eq(index).text();
            const bText = $(b).find('td').eq(index).text();
            if (type === 'number') return parseFloat(aText) - parseFloat(bText);
            return aText.localeCompare(bText);
        });

        if ($(this).hasClass('sorted-asc')) {
            sorted.reverse();
            $(this).removeClass('sorted-asc').addClass('sorted-desc');
        } else {
            $(this).removeClass('sorted-desc').addClass('sorted-asc');
        }
        $(this).siblings().removeClass('sorted-asc sorted-desc');
        $tbody.append(sorted);
    });
}

//Datagrid Function

function renderDatagridHeader(containerId, headers, hasAction = false) {
    const $container = $('#' + containerId);
    const $table = $container.find('table.datagrid');

    if ($table.length === 0) {
        console.warn("Datagrid not found:", containerId);
        return;
    }

    // Xóa header hiện tại
    $table.find('thead tr').empty();

    // Tạo header mới, mặc định data-sort="string"
    headers.forEach(title => {
        const $th = $('<th>').text(title).attr('data-sort', 'string');
        $table.find('thead tr').append($th);
    });

    // Thêm cột "Hành động" nếu hasAction = true
    if (hasAction) {
        $table.find('thead tr').append($('<th>').text('Hành động'));
    }
}

function fillDatagrid(containerId, data) {
    const $container = $('#' + containerId);
    const $table = $container.find('table.datagrid');
    const $thead = $table.find('thead tr');

    if ($table.length === 0) {
        console.warn("Datagrid not found:", containerId);
        return;
    }

    const colCount = $thead.find('th').length;
    const hasAction = $thead.find('th').last().text().trim() === "Hành động";

    // Xóa tbody hiện tại
    const $tbody = $table.find('tbody');
    $tbody.empty();

    data.forEach(rowData => {
        const $tr = $('<tr>');

        // Duyệt dữ liệu từng cột, nhưng **không vượt quá số cột - action**
        const maxDataCols = hasAction ? colCount - 1 : colCount;

        for (let i = 0; i < maxDataCols; i++) {
            let cellValue = rowData[i] !== undefined ? rowData[i] : "";
            const $td = $('<td>').text(cellValue);
            $tr.append($td);
        }
        if (hasAction) {
            const $actionTd = $('<td>');
            $tr.append($actionTd);
        }
        $tbody.append($tr);
    });
}

function fillDatagridAction(containerId, actions) {
    const $container = $('#' + containerId);
    const $table = $container.find('table.datagrid');
    const $thead = $table.find('thead tr');
    const $tbody = $table.find('tbody');

    if ($table.length === 0) {
        console.warn("Datagrid not found:", containerId);
        return;
    }

    let hasAction = $thead.find('th').last().text().trim() === "Hành động";

    // Nếu chưa có cột Action → thêm vào header
    if (!hasAction) {
        $thead.append($('<th>').text('Hành động'));
        hasAction = true;
    }

    // Thêm action vào mỗi row
    $tbody.find('tr').each(function () {
        const $tr = $(this);

        let $actionTd = $tr.find('td').last();

        // Nếu td cuối chưa phải action, xoá sạch để dùng làm action
        if (!$actionTd.find('button').length) {
            $actionTd.empty();
        }

        // Tạo từng nút action
        actions.forEach(act => {
            const $btn = $('<button type="button" class="btn btn-light btn-outline-secondary">');

            if (act.iconClass) {
                $btn.append(`<i class="${act.iconClass}"></i> `);
            }

            $btn.append(act.text);

            // Gán click và truyền row element vào
            if (typeof act.onClick === 'function') {
                $btn.on('click', function (ev) {
                    act.onClick($tr[0], ev);  // <-- truyền row element
                });
            }

            $actionTd.append($btn).append(' ');
        });
    });
}

