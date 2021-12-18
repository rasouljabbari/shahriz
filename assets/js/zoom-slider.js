$('.dv-plus-zoom-icon').on('click', function () {
  let zoom_value = parseInt($('#zoomSlider').val())
  zoom_value += 10;
  $('#zoomSlider').val(zoom_value);
  if (zoom_value >= 50) {
    console.log(zoom_value / 100)
    $('.dv-chairs-list').css({
      transform: `scale(${1 + (zoom_value - 30) / 100}) translate(-22% , 22%)`
    })
  }
});

$('#zoomSlider').on('change' , function (){
  let zoom_value = parseInt($(this).val())
  zoom_value += 10;
  $(this).val(zoom_value);
  if (zoom_value >= 50) {
    console.log(zoom_value / 100)
    $('.dv-chairs-list').css({
      transform: `scale(${1 + (zoom_value - 30) / 100}) translate(-22% , 22%)`
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
  $('#zoomSlider').val(zoom_value);
  $(this).val(zoom_value);
  if (zoom_value >= 50) {
    console.log(zoom_value / 100)
    $('.dv-chairs-list').css({
      transform: `scale(${1 + (zoom_value - 30) / 100}) translate(-22% , 22%)`
    })
  }else{
    $('.dv-chairs-list').css({
      transform: `scale(1)`
    })
  }
});
