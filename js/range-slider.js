var rangeSlider = document.getElementById('range-slider');

noUiSlider.create(rangeSlider, {
  start: [1919, 2007],
  tooltips: [true, true],
  connect: true,
  range: {
    'min': 1919,
    'max': 2007
  },
  format: wNumb({
    decimals: 0
  })
});