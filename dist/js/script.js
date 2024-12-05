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

// Crousal
document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelector('.carousel-slides');
    const slideItems = carousel.querySelectorAll('.carousel-item');
    const prevButton = carousel.querySelector('.prev-button');
    const nextButton = carousel.querySelector('.next-button');
    const totalSlides = slideItems.length;
    const slideWidth = 100; // Slide width in percentage

    let isAnimating = false;
    slides.style.transform = `translateX(-${slideWidth}%)`;

    // Function to move to the next slide
    function moveToNextSlide() {
        if (isAnimating) return;
        isAnimating = true;

        slides.style.transition = 'transform 2s ease';
        slides.style.transform = `translateX(-${slideWidth * 2}%)`;

        slides.addEventListener('transitionend', () => {
            slides.style.transition = 'none';
            slides.appendChild(slides.firstElementChild); // Move first slide to the end
            slides.style.transform = `translateX(-${slideWidth}%)`;
            isAnimating = false;
        }, { once: true });
    }

    // Function to move to the previous slide
    function moveToPrevSlide() {
        if (isAnimating) return;
        isAnimating = true;

        slides.style.transition = 'none';
        slides.prepend(slides.lastElementChild); // Move last slide to the beginning
        slides.style.transform = `translateX(-${slideWidth * 2}%)`;

        setTimeout(() => {
            slides.style.transition = 'transform 2s ease';
            slides.style.transform = `translateX(-${slideWidth}%)`;
            slides.addEventListener('transitionend', () => {
                isAnimating = false;
            }, { once: true });
        });
    }

    // Button listeners
    nextButton.addEventListener('click', moveToNextSlide);
    prevButton.addEventListener('click', moveToPrevSlide);

    // Autoplay (optional)
    // setInterval(moveToNextSlide, 5000);
});



