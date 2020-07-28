/*This code creates functions for tooltips for shapefiles that are then exported to data.js, the functions
 work just like the code for the popups. First all tooltip functions are created, then they are exported as an object*/
function Tooltip() {
  // only display the property "name"
  function nameTooltip(feature) {
    return feature.properties.name;
  }

  // display area and some extra text
  function exampleTooltip(feature) {
    return "The area is: " + feature.properties.area + "sqkm";
  }

  // This exports an object containing all the  functions to be used in data.js
  return { nameTooltip: nameTooltip, exampleTooltip: exampleTooltip };
}

export default Tooltip;
