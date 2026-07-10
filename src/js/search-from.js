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
})

dpMax = new AirDatepicker('#date-out', {
    isMobile: true,
    autoClose: true,
})
