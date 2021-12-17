// leaflet map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoicmpkZXZlbG9wZXIiLCJhIjoiY2t4OWhiZXVzMXJzcTJ3bzViZjJ6Z2Y1cCJ9.nEmZAc_kjXBwRMy5ade0UA', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
