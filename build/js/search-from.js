let dpMin, dpMax;

dpMin = new AirDatepicker('#date-in', {
    minDate: [new Date()],
    isMobile: true,
    autoClose: true,
    onSelect({date}) {
      dpMax.clear();
      if(date) {
        dpMax.update({
            minDate: date.setDate(date.getDate() + 1)
        })
      } else {
        dpMax.clear();
      }
    }
});

dpMax = new AirDatepicker('#date-out', {
    isMobile: true,
    autoClose: true,
    minDate: [new Date()]
});

$(document).on('click', '.js-filter-opener', function() {
  $('.page').addClass('is-overflow');
  $('.js-filter').fadeIn();
  return false
});

$(document).on('click', '.js-filter-closer', function() {
  $('.page').removeClass('is-overflow');
  $('.js-filter').fadeOut();
  return false
});

$(document).on('click', '.js-sorting-opener', function() {
  $('.page').addClass('is-overflow');
  $('.js-sorting').fadeIn();
  return false
});

$(document).on('click', '.js-sorting-closer', function() {
  $('.page').removeClass('is-overflow');
  $('.js-sorting').fadeOut();
  return false
});
