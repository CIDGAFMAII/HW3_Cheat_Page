// Modal 開關
const openModalBtn = document.getElementById('openModal');
const modalOverlay  = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
openModalBtn.addEventListener('click', () => modalOverlay.classList.add('active'));
closeModalBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
});

// Tabs 切換
const plateTab   = document.getElementById('modalPlateTab');
const loginTab   = document.getElementById('modalLoginTab');
const plateForm  = document.getElementById('modalPlateForm');
const loginForm  = document.getElementById('loginForm');
plateTab.addEventListener('click', () => {
    plateTab.classList.add('active'); loginTab.classList.remove('active');
    plateForm.classList.remove('hidden'); loginForm.classList.add('hidden');
});
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active'); plateTab.classList.remove('active');
    loginForm.classList.remove('hidden'); plateForm.classList.add('hidden');
});

// 刷新驗證碼 (模擬)
document.getElementById('refreshCaptcha')?.addEventListener('click', () => {
    document.querySelector('.captcha-group img').src = 'img/captcha.png?' + Date.now();
});

// 模擬提交
plateForm.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'result.html';
});
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('登入模擬成功！');
    modalOverlay.classList.remove('active');
});
