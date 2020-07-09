function Style() {
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
  function hidricoBaseStyle(feature) {
    return {
      fillColor: indiceHidricoColors(feature.properties.Base_idx),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }

  return {
    watersheds: hidricoBaseStyle,
    AOI: {
      fillColor: "none",
      weight: 2,
      opacity: 0.9,
      color: "#ff0000",
    },
    Flood: {
      fillColor: "#537199",
      fillOpacity: 0.5,
      weight: 0.5,
      opacity: 0.7,
      color: "#537199",
    },
  };
}

export default Style;
