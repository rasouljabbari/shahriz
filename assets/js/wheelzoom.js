let main_scale = 0,
  panning = false,
  pointX = 0,
  pointY = 0,
  start = { x: 0, y: 0 },
  zoom = document.getElementById("slide");

$(document).ready(function (){
  let scroll_zoom = new ScrollZoom($('#container'),10,0.5)
})

function ScrollZoom(container,max_scale,factor){
  let target = container.children().first()
  let size = {w:target.width(),h:target.height()}
  let zoom_target = {x:0,y:0}
  let zoom_point = {x:0,y:0}
  target.css('transform-origin','0 0')
  target.on("mousewheel DOMMouseScroll onmousemove",scrolled)
  function scrolled(e){
    let offset = container.offset()
    zoom_point.x = e.pageX - offset.left
    zoom_point.y = e.pageY - offset.top

    e.preventDefault();
    let delta = e.delta || e.originalEvent.wheelDelta;
    if (delta === undefined) {
      //we are on firefox
      delta = e.originalEvent.detail;
    }
    delta = Math.max(-1,Math.min(1,delta)) // cap the delta to [-1,1] for cross browser consistency

    // determine the point on where the slide is zoomed in
    zoom_target.x = (zoom_point.x - pointX)/main_scale
    zoom_target.y = (zoom_point.y - pointY)/main_scale

    // apply zoom
    main_scale += delta*factor * main_scale
    main_scale = Math.max(1,Math.min(max_scale,main_scale))

    // calculate x and y based on zoom
    pointX = -zoom_target.x * main_scale + zoom_point.x
    pointY = -zoom_target.y * main_scale + zoom_point.y


    // Make sure the slide stays in its container area when zooming out
    if(pointX>0)
      pointX = 0
    if(pointX+size.w*main_scale<size.w)
      pointX = -size.w*(main_scale-1)
    if(pointY>0)
      pointY = 0
    if(pointY+size.h*main_scale<size.h)
      pointY = -size.h*(main_scale-1)

    update()
  }

  function update(){
    target.css('transform','translate('+(pointX)+'px,'+(pointY)+'px) scale('+main_scale+','+main_scale+')')
  }
}



function setTransform() {
  zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale("+main_scale+","+main_scale+")";
}
zoom.onmousedown = function (e) {
  e.preventDefault();
  start = { x: e.clientX - pointX, y: e.clientY - pointY };
  panning = true;
}
zoom.onmouseup = function (e) {
  panning = false;
}
zoom.onmousemove = function (e) {
  e.preventDefault();
  if (!panning) {
    return;
  }
  pointX = (e.clientX - start.x);
  pointY = (e.clientY - start.y);
  setTransform();
}
