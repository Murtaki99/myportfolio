//nav fixed
window.onscroll =function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;
    
    if(window.pageYOffset > fixnav){
        header.classList.add('nav-fixed');
    }else{
        header.classList.remove('nav-fixed');
    }
}
//humberger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('humb-line-active');
    navMenu.classList.toggle ('hidden');

});