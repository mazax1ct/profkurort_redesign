//открытие главного меню
$(document).on('click', '.js-menu-toggler', function () {
  const _this = $(this);
  if(!_this.hasClass('is-active')) {
    $('body').addClass('main-menu-open');
    $('.main-menu').fadeIn();
    _this.find('use').attr('xlink:href', 'images/sprite.svg#close-icon');
    _this.addClass('is-active');
  } else {
    _this.find('use').attr('xlink:href', 'images/sprite.svg#menu-icon');
    _this.removeClass('is-active');
    $('body').removeClass('main-menu-open');
    $('.main-menu').fadeOut();
  }

  return false;
});

//второй уровень меню
$(document).on('click', '.js-sublist-toggler', function () {
  const _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.closest('.main-menu__root-item').find('.main-menu__sublist').slideDown();
    _this.addClass('is-active');
  } else {
    _this.closest('.main-menu__root-item').find('.main-menu__sublist').slideUp();
    _this.removeClass('is-active');
  }

  return false;
});

//табы
$(document).on('click', '.js-tab-button', function () {
  $(this).closest('.tabs').find('.js-tab-button').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-tab='+$(this).attr('data-tab')+']').addClass('is-active');
  return false;
});
