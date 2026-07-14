var detailThumbs = new Swiper('.js-detail-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});

var detailMainSlider = new Swiper('.js-detail-main', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: detailThumbs
  },
});
