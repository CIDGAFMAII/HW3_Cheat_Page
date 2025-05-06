document.addEventListener('DOMContentLoaded', () => {
    // --- Modal 開關邏輯 ---
    const openModalBtn = document.getElementById('openModal');
    const modalOverlay  = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModal');

    openModalBtn?.addEventListener('click', () =>
        modalOverlay?.classList.add('active')
    );
    closeModalBtn?.addEventListener('click', () =>
        modalOverlay?.classList.remove('active')
    );
    // 點擊遮罩區以外關閉
    modalOverlay?.addEventListener('click', e => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // --- 分頁 Tabs 切換 ---
    const plateTab  = document.getElementById('modalPlateTab');
    const loginTab  = document.getElementById('modalLoginTab');
    const plateForm = document.getElementById('modalPlateForm');
    const loginForm = document.getElementById('loginForm');

    plateTab?.addEventListener('click', () => {
        plateTab.classList.add('active');
        loginTab?.classList.remove('active');
        plateForm?.classList.remove('hidden');
        loginForm?.classList.add('hidden');
    });

    loginTab?.addEventListener('click', () => {
        loginTab.classList.add('active');
        plateTab?.classList.remove('active');
        loginForm?.classList.remove('hidden');
        plateForm?.classList.add('hidden');
    });

    // --- 驗證碼刷新 (模擬) ---
    document.getElementById('refreshCaptcha')?.addEventListener('click', () => {
        const img = document.querySelector('.captcha-group img');
        if (img) {
            img.src = 'img/captcha.png?' + Date.now(); // 时间戳避免快取
        }
    });

    // --- 送出查詢或登入，跳轉到結果頁 ---
    plateForm?.addEventListener('submit', e => {
        e.preventDefault();
        window.location.href = 'result.html';
    });
    loginForm?.addEventListener('submit', e => {
        e.preventDefault();
        window.location.href = 'result.html';
    });

    // --- 結果頁「立即繳納」按鈕跳到繳費頁 ---
    document.getElementById('payNowBtn')?.addEventListener('click', () => {
        window.location.href = 'payment.html';
    });

    // --- 繳費表單攔截，顯示詐騙提示 ---
    document.getElementById('paymentForm')?.addEventListener('submit', e => {
        e.preventDefault();
        alert('哈哈!你被詐騙了!');
    });
});
