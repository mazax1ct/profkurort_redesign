$(document).ready(function() {
  const mainSlider = new Swiper('.js-main-slider', {
    loop: true,

    navigation: {
      nextEl: '.js-main-slider-next',
      prevEl: '.js-main-slider-prev'
    }
  });
});
