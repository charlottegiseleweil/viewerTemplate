import React from "react";
import L from "leaflet";
import shp from "shpjs";
import Container from "react-bootstrap/Container";

import Legend from "./Legend";

const parse_georaster = require("georaster");
const GeoRasterLayer = require("georaster-layer-for-leaflet");

// variables to hold the main map and all the layers displayed
let map;
let layers;
let updateChart;

class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    updateChart = props.updateChart;
  }

  // initialize the map
  componentDidMount() {
    // create base map
    map = L.map("map", {
      center: this.props.baseMap.center,
      zoom: this.props.baseMap.zoom,
      layers: [
        L.tileLayer(this.props.baseMap.src, {
          attribution: this.props.baseMap.attribution,
        }),
      ],
    });
    console.log(map);
    layers = L.layerGroup().addTo(map);
    this.updateLayers();

    // Add labels if provided
    if (this.props.baseMap.labelsSrc) {
      map.createPane("labels");
      map.getPane("labels").style.zIndex = 600;
      map.getPane("labels").style.pointerEvents = "none";
      L.tileLayer(this.props.baseMap.labelsSrc, { pane: "labels" }).addTo(map);
    }
  }

  componentDidUpdate(prevProps) {
    // check if the datasets have changed
    if (this.props.datasets !== prevProps.datasets) {
      this.updateLayers();
    }
  }

  // this function contains the html code that will be rendered
  render() {
    return (
      <Container fluid={true} className="p-0">
        {this.isDataSelected() && (
          <Legend
            datasets={this.props.datasets}
            selectedDatasets={this.props.selectedDatasets}
          />
        )}
        <div id="map"></div>
      </Container>
    );
  }

  // function to update all selected layers
  updateLayers = () => {
    this.props.chartIsLinked && updateChart([]);
    layers.clearLayers();
    this.props.selectedDatasets.forEach((id) => {
      let dataset = this.props.datasets[id];

      switch (dataset.type) {
        case "shapefile":
          addShapefile(dataset, this.props.chartIsLinked);
          break;

        case "tiles":
          addTiles(dataset);
          break;

        case "raster":
          addRaster(dataset);
          break;

        default:
      }
    });
  };

  isDataSelected = () => {
    return this.props.selectedDatasets.length > 0;
  };
}

export default MainMap;

function addShapefile(dataset, chartIsLinked) {
  shp(require("../data/shapefiles/" + dataset.src)).then(function (geojson) {
    let newLayer = L.geoJSON(geojson, {
      style: dataset.style
        ? function (feature) {
            return dataset.style(feature.properties[dataset.styleProperty]);
          }
        : {},

      // add point styling
      pointToLayer: function (feature, latlng) {
        if (dataset.icon) {
          // create icon if there is one specified
          var myIcon = L.icon({
            iconUrl: require("../static/icons/" + dataset.icon),
            iconSize: [35, 35],
            iconAnchor: [16, 37],
            popupAnchor: [0, -28],
            tooltipAnchor: [0, -28],
          });
          return L.marker(latlng, { icon: myIcon });
        } else {
          return L.marker(latlng);
        }
      },

      onEachFeature: function (feature, layer) {
        // if we want to bind the map to a chart
        if (chartIsLinked && dataset.chartProperties) {
          //bind function to click
          layer.on("click", function (e) {
            let columns = [["x-label", "Example x "]];

            for (let i = 0; i < dataset.chartProperties.length; i++) {
              columns.push([
                dataset.namesOfProperties[i],
                feature.properties[dataset.chartProperties[i]],
              ]);
            }
            updateChart(columns);

            newLayer.setStyle(function (feature) {
              return dataset.style(feature.properties[dataset.styleProperty]);
            }); //resets layer colors
            layer.setStyle({ fillOpacity: 0.7, fillColor: "#000000" }); //highlights selected.
          });
        }
        // if we want to add a tooltip
        if (dataset.tooltip) {
          layer.bindTooltip(dataset.tooltip(feature));
        }

        // if we want to add a popup on click
        if (dataset.popup) {
          layer.bindPopup(dataset.popup(feature));
        }
      },
    });
    newLayer.addTo(layers);
  });
}

function addRaster(dataset) {
  let style = dataset.style
    ? dataset.style
    : (d) => {
        return "#ffffff";
      };
  fetch(require("../data/rasters/" + dataset.src))
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
      parse_georaster(arrayBuffer).then((georaster) => {
        var layer = new GeoRasterLayer({
          georaster: georaster,
          opacity: 0.7,
          pixelValuesToColorFn: (values) => style(values[0]),
          resolution: 64, // optional parameter for adjusting display resolution
        });
        layer.addTo(layers);
      });
    });
}

function addTiles(dataset) {
  L.tileLayer(dataset.src, {
    attribution: "",
  }).addTo(layers);
}
