//nav fixed
window.onscroll =function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;
    const gotop  = document.querySelector('#gotop') 
    
    if(window.pageYOffset > fixnav){
        header.classList.add('nav-fixed');
        gotop.classList.remove('hidden');
        gotop.classList.add('flex');
    }else{
        header.classList.remove('nav-fixed');
         gotop.classList.remove('flex');
        gotop.classList.add('hidden');
    }
}
//humberger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('humb-line-active');
    navMenu.classList.toggle ('hidden');

});
window.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('humb-line-active');
        navMenu.classList.add('hidden');
    }
});

// darkmood
const darktoggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggle.addEventListener('click', function(){
    if(darktoggle.checked){
        html.classList.add('dark');
        localStorage.theme ='dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme ='light';
    }
});

// pindahkan togel sesuai dengan mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darktoggle.checked =true;
} else {
  darktoggle.checked =true;
}




