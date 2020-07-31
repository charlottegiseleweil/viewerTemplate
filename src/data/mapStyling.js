/* In this file the funtions for styling rasters and shapefiles are defined.
First, the different color schemas are defined. Then a function called "Style" 
is declared which returns the styling objects that are exported to data.js 
Shapefiles needs a seperate function to define opacity, fillcolor etc (see examples in style()) 
Rasters only need the color Schema*/

/*Examples diverging color schema*/
const redToBlueColor = (d) => {
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

/*Examples sequential colors schema*/
const bluesColor = (d) => {
  return d > 0.8
    ? "#08519c"
    : d > 0.6
    ? "#3182bd"
    : d > 0.4
    ? "#6baed6"
    : d > 0.2
    ? "#bdd7e7"
    : "#eff3ff";
};
const greensColor = (d) => {
  return d > 0.8
    ? "#006d2c"
    : d > 0.6
    ? "#31a354"
    : d > 0.4
    ? "#74c476"
    : d > 0.2
    ? "#bae4b3"
    : "#edf8e9";
};
const redsColor = (d) => {
  return d > 0.8
    ? "#a50f15"
    : d > 0.6
    ? "#de2d26"
    : d > 0.4
    ? "#fb6a4a"
    : d > 0.2
    ? "#fcae91"
    : "#fee5d9";
};
const purplesColor = (d) => {
  return d > 0.8
    ? "#54278f"
    : d > 0.6
    ? "#756bb1"
    : d > 0.4
    ? "#9e9ac8"
    : d > 0.2
    ? "#cbc9e2"
    : "#f2f0f7";
};

/*Examples catagorical color schema*/
const greenAndRedColor = (d) => {
  switch (d) {
    case 1:
      return "#ab1700";
    case -1:
      return "#00ab39";
    default:
      return null;
  }
};

// the returning object from this function is exported to data.js
function Style() {
  // example -- red outline
  function redOutline() {
    return {
      fillColor: "none",
      weight: 2,
      opacity: 0.9,
      color: "#ff0000",
    };
  }

  // example -- styling based on the property called "Base_idx" in the shapefile
  function redToBlue(feature) {
    return {
      fillColor: redToBlueColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }

  // example functions for shapefiles -- change "xxx" to the name of your shapefile property
  function blues(feature) {
    return {
      fillColor: bluesColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }
  function greens(feature) {
    return {
      fillColor: greensColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }
  function reds(feature) {
    return {
      fillColor: redsColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }
  function purples(feature) {
    return {
      fillColor: purplesColor(feature),
      weight: 0.5,
      opacity: 0.9,
      color: "#958f8f",
      Array: "0",
      fillOpacity: 0.5,
    };
  }

  // This exports an object containing all the styling functions to be used in data.js
  return {
    redToBlue: redToBlue,
    redOutline: redOutline,
    blues: blues,
    greens: greens,
    reds: reds,
    purples: purples,
    greenAndRedRaster: greenAndRedColor, // raster only need a color
  };
}

export default Style;
