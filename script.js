// 取得漢堡選單按鈕和導覽列的元素
const navDrawer = document.getElementById('nav-drawer');
const navList = document.getElementById('nav-list');

// 當點擊漢堡選單按鈕時，切換 "active" 類名
navDrawer.addEventListener('click', () => {
    navList.classList.toggle('active');
});