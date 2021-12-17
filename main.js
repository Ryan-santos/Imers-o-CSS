const bntMobile = document.getElementById('bnt_mobile');

function toggleMenu() {
    const nav = document.getElementById('menu_top');
    nav.classList.toggle('active')
}

bntMobile.addEventListener('click', toggleMenu);

window.onscroll = function(){
    // O que faz mudar a cor do menu deacordo com a posicao do scroll
    var top = window.pageYOffset || document.documentElement.scrollTop
    const link_nav = document.querySelectorAll('.link_nav');
    console.log(top)
    if( top >= 0 ) {
        link_nav.forEach((item) => 
        item.classList.remove('active'));
    }if( top >= 700 ) {
        link_nav.forEach((item) => 
        item.classList.remove('active'));
        link_nav[0].classList.add('active');
    }if( top >= 1200 ) {
        link_nav.forEach((item) => 
        item.classList.remove('active'));
        link_nav[1].classList.add('active');
    }if( top >= 1700 ) {
        link_nav.forEach((item) => 
        item.classList.remove('active'));
        link_nav[2].classList.add('active');
    }if( top >= 2050 ) {
        link_nav.forEach((item) => 
        item.classList.remove('active'));
        link_nav[3].classList.add('active');
    }

}