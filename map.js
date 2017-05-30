var center = [38.895, -77.020];
var zoom = 12;
var before = L.map('before', {
    attributionControl: false,
    inertia: false,
    minZoom: 12
}).setView(center, zoom);

var after = L.map('after', {
    inertia: false,
    minZoom: 12
}).setView(center, zoom);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/spatial.map-qgihrqg5/{z}/{x}/{y}.png').addTo(before); //
L.tileLayer('http://{s}.tiles.mapbox.com/v3/spatial.map-qgihrqg5/{z}/{x}/{y}.png').addTo(after); //

L.marker([38.895, -77.060]).addTo(before);

//BEFORE (red)
var circle = L.circle([38.895, -77.020], 2000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5
}).addTo(before);

L.marker([38.895, -77.060], {icon: L.AwesomeMarkers.icon({icon: 'glass',  prefix: 'glyphicon',markerColor: 'red'}) }).addTo(before);
L.marker([38.895, -77.050], {icon: L.AwesomeMarkers.icon({icon: 'glass',  prefix: 'glyphicon',markerColor: 'red'}) }).addTo(before);
L.marker([38.895, -77.040], {icon: L.AwesomeMarkers.icon({icon: 'glass',  prefix: 'glyphicon',markerColor: 'red'}) }).addTo(before);

//AFTER (blue)
var circle = L.circle([38.895, -77.020], 2000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5
}).addTo(after);

L.marker([38.905, -77.010], {icon: L.AwesomeMarkers.icon({icon: 'headphones',  prefix: 'glyphicon',markerColor: 'blue'}) }).addTo(after);
L.marker([38.915, -77.000], {icon: L.AwesomeMarkers.icon({icon: 'headphones',  prefix: 'glyphicon',markerColor: 'blue'}) }).addTo(after);
L.marker([38.925, -76.990], {icon: L.AwesomeMarkers.icon({icon: 'headphones',  prefix: 'glyphicon',markerColor: 'blue'}) }).addTo(after);

$('#map-container').beforeAfter(before, after);