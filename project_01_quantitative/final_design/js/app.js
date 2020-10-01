// / <reference types="d3" />
// / <reference types="chart.js" />


String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}; // taken from Tuan's answer https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript

async function drawViz() {
  const dataset = await d3.csv(
    "https://raw.githubusercontent.com/shmanzar/major-studio/master/project_01_quantitative/final_design/data/ms_proj1_greenbook_map_data.csv",
    (d) => {
      return { state: d.State.toProperCase(), count: +d.Count };
    }
  );
console.log(Object.values((dataset[3]))[1]);
let metricDataByCountry = {};
dataset.forEach(d => {
  return metricDataByCountry[d['state']] = +d['count'] || 0
})

console.log(metricDataByCountry);

 //Load in GeoJSON data

const countryShapes = await d3.json('https://raw.githubusercontent.com/shmanzar/major-studio/master/project_01_quantitative/final_design/data/gz_2010_us_040_00_5m.json')
console.log(countryShapes);

var mapboxAccessToken = 'pk.eyJ1Ijoic2JvZ2hhbmkiLCJhIjoiY2lqY3B6am5mMDAwc3Zpa3VnMHJlcmk1biJ9.mvtroSzRbwei8cEKme4mCw';
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: 'Data: <a href="https://nmaahc.si.edu/object/nmaahc_2015.97.42">Collection of the Smithsonian National Museum of African American History and Culture</a> | Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1
}).addTo(map);

  // control that shows state info on hover
  var info = L.control();

  info.onAdd = function(map) {
    this._div = L.DomUtil.create("div", "info");
    this.update();
    return this._div;
  };

  info.update = function(props) {
    this._div.innerHTML =
      "<h4>Number of amenities listed in the Green Book</h4>" +
      (props
        ? "<b>" +
          props.state +
          "</b><br />" +
          props.count +
         " ": "Hover over a state");
  };

  info.addTo(map);

  function getColor(d) {
    return d > 14
      ? "#800026"
      : d > 12
        ? "#BD0026"
        : d > 10
          ? "#E31A1C"
          : d > 8
            ? "#FC4E2A"
            : d > 6
              ? "#FD8D3C"
              : d > 4 ? "#FEB24C" : d > 2 ? "#FED976" : "#FFEDA0";
  }


function style() {
  return {
    weight: 2,
    opacity: 1,
    color: "grey",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: getColor(dataset.count)
  };
}
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  info.update(layer);
}
var geojson;
function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}
geojson = L.geoJson(countryShapes, {style: style, onEachFeature: onEachFeature}).addTo(map);


}

drawViz();


// async function drawChart() {
//   const dataset = await d3.csv(
//     "../data/ms_proj1_greenbook_count_data.csv",
//     d => {
//       return { state: d.State.toProperCase(), typefac: d.Type_of_facilities, count: +d.Count };
//     }
//   )
//   let metricDataByCountry = {}

//   dataset.forEach(d => {
//     return metricDataByCountry[d['typefac']] = +d['count'] || 0
//   })
  
//   const metricValues = Object.values(Object.values(dataset))
//   console.log(metricValues);
  
//   var ctx = document.getElementById('myChart').getContext('2d');
//   var myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: metricValues.state,
//           // labels: ['TOURIST HOMES',
//           // 'HOTELS',
//           // 'RESTAURANTS',
//           // 'TAVERNS',
//           // 'GARAGES',
//           // 'SERVICE STATIONS',
//           // 'BEAUTY PARLORS',
//           // 'BARBER SHOPS',
//           // 'NIGHT CLUBS',
//           // 'RESTAURANT'],
//           datasets: [{
//               label: '# of facilities',
//               data: metricValues.count,
//               stack: dataset.state,
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//             xAxes: [{
//               stacked: true
//             }],
//               yAxes: [{
//                   ticks: {
//                       beginAtZero: true
//                   }
//               }]
//           }
//       }
//   });

// }

// drawChart()