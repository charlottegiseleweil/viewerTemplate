import React from "react";
import L from "leaflet";
import shp from "shpjs";

import Legend from "./Legend";
import Container from "react-bootstrap/Container";

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
      if (dataset.type === "shapefile") {
        shp(require("../data/shapefiles/" + dataset.src)).then(function (
          geojson
        ) {
          //do something with your geojson
          L.geoJSON(geojson, {
            style: dataset.style ? dataset.style : {},
          }).addTo(layers);
        });
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
