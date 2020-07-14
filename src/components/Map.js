import React from "react";
import L from "leaflet";
import shp from "shpjs";

import Legend from "./Legend";
import Container from "react-bootstrap/Container";

const parse_georaster = require("georaster");
const GeoRasterLayer = require("georaster-layer-for-leaflet");

let map;
let layers;

class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateLayers = () => {
    layers.clearLayers();
    this.props.selectedDatasets.forEach((id) => {
      let dataset = this.props.datasets[id];

      switch (dataset.type) {
        case "shapefile":
          addShapefile(dataset);
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

  componentDidMount() {
    // create base map
    map = L.map("map", {
      center: this.props.baseMap.center,
      zoom: this.props.baseMap.zoom,
      layers: [L.tileLayer(this.props.baseMap.src)],
    });
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

  isDataSelected = () => {
    return this.props.selectedDatasets.length > 0;
  };

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
}

export default MainMap;

function addShapefile(dataset) {
  shp(require("../data/shapefiles/" + dataset.src)).then(function (geojson) {
    //do something with your geojson
    L.geoJSON(geojson, {
      style: dataset.style ? dataset.style : {},
    }).addTo(layers);
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
