
const key = 'qj5PffnyfDhj9e2EVwRC';
const map = new maplibregl.Map({
  container: 'map', // container's id or the HTML element in which MapLibre GL JS will render the map
  style: `https://api.maptiler.com/maps/streets/style.json?key=${key}`, // style URL
  center: [106.660172, 10.762622], // starting position [lng, lat]
  zoom: 10, // starting zoom
});
map.addControl(new maplibregl.NavigationControl(), 'top-right');