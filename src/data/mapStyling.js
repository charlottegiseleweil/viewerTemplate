function Style() {
  // example -- styling area of interest
  function AOI() {
    return {
      fillColor: "none",
      weight: 2,
      opacity: 0.9,
      color: "#ff0000",
    };
  }

  // example -- styling based on the property called "Base_idx" in the shapefile
  function waterSheds(feature) {
    return {
      fillColor: indiceHidricoColors(feature.properties.Base_idx),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }
  const indiceHidricoColors = (d) => {
    return d > 0.9
      ? "#4878b7"
      : d > 0.8
      ? "#849cb8"
      : d > 0.7
      ? "#c1c0b8"
      : d > 0.6
      ? "#fde3b8"
      : d > 0.5
      ? "#f0ac8c"
      : d > 0.4
      ? "#e2745f"
      : "#d43c33";
  };

  // This exports an object containing all the styling functions to be used in data.js
  return {
    watersheds: waterSheds,
    AOI: AOI,
  };
}

export default Style;
