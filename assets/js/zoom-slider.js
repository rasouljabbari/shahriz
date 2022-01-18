$('.dv-plus-zoom-icon').on('click', function () {
  let zoom_value = parseInt($('#zoomSlider').val())
  zoom_value += 10;
  $('#zoomSlider').val(zoom_value);
  if (zoom_value >= 50) {
    $('.dv-chairs-list').css({
      transform: `scale(${1 + (zoom_value - 50) / 100}) translate(${-(zoom_value - 50)}%)`
    })
  }
});

$('#zoomSlider').on('change' , function (){
  let zoom_value = parseInt($(this).val())
  zoom_value += 10;
  $(this).val(zoom_value);
  if (zoom_value >= 50) {
    $('.dv-chairs-list').css({
      transform: `scale(${1 + (zoom_value - 50) / 100}) translate(${-(zoom_value - 50)}%)`
    })
  }else{
    $('.dv-chairs-list').css({
      transform: `scale(1)`
    })
  }
})

$('.dv-minus-zoom-icon').on('click', function () {
  let zoom_value = parseInt($('#zoomSlider').val())
  zoom_value -= 10;
  if (zoom_value >= 50) {
    $('#zoomSlider').val(zoom_value);
    $(this).val(zoom_value);
    $('.dv-chairs-list').css({
      transform: `scale(${1 + (zoom_value - 50) / 100}) translate(${-(zoom_value - 50)}%)`
    })
  }else{
    $('.dv-chairs-list').css({
      transform: `scale(1)`
    })
  }
});
