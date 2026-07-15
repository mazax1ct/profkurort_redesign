var detailThumbs = new Swiper('.js-detail-thumbs', {
  spaceBetween: 8,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true
});

var detailMainSlider = new Swiper('.js-detail-main', {
  lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  thumbs: {
    swiper: detailThumbs
  },
});

$(document).on('click', '.js-tab', function () {
  $(this).closest('.detail__tabs').find('.js-tab').removeClass('is-active button--primary').addClass('button--outline');
  $(this).removeClass('button--outline').addClass('is-active button--primary');
  $(this).closest('.detail__tabs').find('.tab').removeClass('is-active');
  $(this).closest('.detail__tabs').find('.tab[data-tab='+$(this).attr('data-tab')+']').addClass('is-active');

  if($(this).attr('data-tab') !== 'booking') {
    $('.detail__mobile-book').removeClass('hidden');
  }
  return false;
});

$(document).on('click', '.js-booking-scroll', function () {
  $('.detail__tabs').find('.js-tab').removeClass('is-active button--primary').addClass('button--outline');
  $('.detail__tabs').find('.js-tab[data-tab="booking"]').removeClass('is-active button--outline').addClass('button--primary');
  $('.detail__tabs').find('.tab').removeClass('is-active');
  $('.detail__tabs').find('.tab[data-tab="booking"]').addClass('is-active');
  $('.detail__mobile-book').addClass('hidden');
});
