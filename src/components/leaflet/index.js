import './index.scss';


const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2lhcm9oaW4iLCJhIjoiY2pyZGVld2V1MW5iZjQ1cG5zcGl3NmppciJ9.cvrpAFaoU6V389qbey-cQg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  zoom: 12,
  center: [27.552516, 53.897726],
});

map.on('load', () => {
  map.addLayer({
    id: 'population',
    type: 'circle',
    source: {
      type: 'vector',
      url: 'mapbox://examples.8fgz4egr',
    },
    'source-layer': 'sf2010',
    paint: {
      // make circles larger as the user zooms from z12 to z22
      'circle-radius': {
        base: 1.75,
        stops: [[12, 2], [22, 180]],
      },
      // color circles by ethnicity, using a match expression
      // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
      'circle-color': [
        'match',
        ['get', 'ethnicity'],
        'White', '#fbb03b',
        'Black', '#223b53',
        'Hispanic', '#e55e5e',
        'Asian', '#3bb2d0',
        /* other */ '#ccc',
      ],
    },
  });
});
