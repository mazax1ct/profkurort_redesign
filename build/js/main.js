//отслеживание скролла для шапки
var header = $('.header'),
    toTop = $('.js-to-top'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > $('.header').height() * 2) {
		header.addClass('is-scrolled');
	}

  if (scrolled == 0) {
		header.removeClass('is-scrolled');
	}

  if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('is-out');
	} else {
		header.removeClass('is-out');
	}

	scrollPrev = scrolled;
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие главного меню
$(document).on('click', '.js-menu-toggler', function () {
  const _this = $(this);
  if(!_this.hasClass('is-active')) {
    $('body').addClass('main-menu-open');
    $('.main-menu').addClass('is-open');
    _this.find('use').attr('xlink:href', 'images/sprite.svg#close-icon');
    _this.addClass('is-active');
  } else {
    _this.find('use').attr('xlink:href', 'images/sprite.svg#menu-icon');
    _this.removeClass('is-active');
    $('body').removeClass('main-menu-open');
    $('.main-menu').removeClass('is-open');
  }

  return false;
});

//второй уровень меню
$(document).on('click', '.js-sublist-toggler', function () {
  const _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.closest('.main-menu__root-item').find('.main-menu__sublist').slideDown();
    _this.find('use').attr('xlink:href', 'images/sprite.svg#minus-icon');
    _this.addClass('is-active');
  } else {
    _this.closest('.main-menu__root-item').find('.main-menu__sublist').slideUp();
    _this.find('use').attr('xlink:href', 'images/sprite.svg#plus-icon');
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
