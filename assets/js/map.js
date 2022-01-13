// leaflet map
var map = L.map('map').setView([document.getElementById('map').getAttribute('lat'), document.getElementById('map').getAttribute('lng')], 13);

console.log()

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoicmpkZXZlbG9wZXIiLCJhIjoiY2t4OWhiZXVzMXJzcTJ3bzViZjJ6Z2Y1cCJ9.nEmZAc_kjXBwRMy5ade0UA', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(map);

var marker = L.marker([document.getElementById('map').getAttribute('lat'), document.getElementById('map').getAttribute('lng')]).addTo(map);
