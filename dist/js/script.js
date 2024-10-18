//navbar
window.onscroll = function(){
    const header= document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset>fixednav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}

//humberger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-aktif');
    navmenu.classList.toggle('hidden');
});