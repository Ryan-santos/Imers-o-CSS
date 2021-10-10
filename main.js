const bntMobile = document.getElementById('bnt_mobile');

function toggleMenu() {
    const nav = document.getElementById('menu_top');
    nav.classList.toggle('active')
}

bntMobile.addEventListener('click', toggleMenu);