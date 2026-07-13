const cardsSlider = new Swiper('.js-cards-slider', {
  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: '.js-cards-slider-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.js-cards-slider-next',
    prevEl: '.js-cards-slider-prev'
  },

  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  }
})
