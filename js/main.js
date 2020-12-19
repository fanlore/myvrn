var mySwiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    spaceBetween:10,
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3
        }
    },
  });

var header = new Typed('.header__title', {
    strings: ["МОЙ ВОРОНЕЖ","ИССЛЕДУЙТЕ КАЖДЫЙ УГОЛОК СВОЕГО РОДНОГО ГОРОДА И НАСЛАДИТЕСЬ ОКРУЖАЮЩЕЙ ВАС КРАСОТОЙ"],
    typeSpeed: 80,
    showCursor: true,
    cursorChar: "|"
  });
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document
            .querySelector(' ' + blockID)
            .scrollIntoView({behavior: "smooth", block: "start"});
    })
}

let likes = document.querySelectorAll('.like');
likes.forEach(function (like) {
    like.addEventListener('click', function (e) {
        e.preventDefault();
       like.classList.toggle('active');
    });
});
require('fslightbox');
