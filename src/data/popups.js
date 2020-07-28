/*This code creates functions for popups for shapefiles that are then exported to data.js, the functions
 work just like the code for the tooltips. First all popup-functions are created, then they are exported as an object*/
function Popup() {
  // only display the property "name"
  function examplePopup(feature) {
    return (
      "Name: " +
      feature.properties.name +
      "<br> Area: " +
      feature.properties.area +
      " &#13217; <br> <a target='_blank' rel='noopener noreferrer'href='" +
      feature.properties.link +
      "' > More info</a>"
    );
  }

  // This exports an object containing all the  functions to be used in data.js
  return { examplePopup: examplePopup };
}

export default Popup;
