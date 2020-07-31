/* 
This file includes the data for all maps, text, legends etc
*/
import Style from "./mapStyling";
import Tooltip from "./tooltips";
import Popup from "./popups";

function Data() {
  return {
    explorer: {
      config: {
        showInfoButton: true, // show more information for all data sections
        showDownloadButton: true, // show download button if there is a link to the dataset
        chartIsLinkedTo: 4, // the datasetID the chart should be linked to, if no linking write chartIsLinkedTo: null
      },

      baseMap: {
        src:
          "https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png",
        center: [-12.85, -69.7],
        zoom: 9,
        labelsSrc:
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
      },
      /*
      Each datasection include:
      id -- order in array 
      title -- title of section
      
      infotext -- text that will be diplayed in the secondary panel if showInfoButton: true
      img -- image for secondary panel (optional) should be saved in static/images/

      expanded -- if the secion is expanded or collapsed by default (true or false)
      
       */
      dataSections: [
        {
          id: 0,
          title: "First data section",
          infotext: [
            {
              subtitle: "Description",
              text:
                "This section includes two shapefiles, one polygon and one pointmap. The pointmap has tooltips and popups that are displayed when the icon is clicked. ",
            },
            {
              subtitle: "Method",
              text:
                "Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus.",
            },
          ],
          img: "natcap.png",
          expanded: false,
        },
        {
          id: 1,
          title: "Second data section",
          infotext: [
            {
              subtitle: "Description",
              text: "This section includes rasters",
            },
          ],
          expanded: false,
        },
        {
          id: 2,
          title: "Third data section",
          infotext: [
            {
              subtitle: "Description",
              text:
                "This section has an linked chart connected to the shapefile. Read about details for this in the readme.",
            },
          ],
          expanded: true,
        },
      ],
      /*
      Each dataset include:
      id -- order in array 
      sectionID -- which section the dataset belongs to
      title -- title of dataset
      type -- what type of source (choose between shapefile, tiles (webhosted) or rasters (tif - must be projected with EPSG:4326)  )
      src -- file name (place the files in the corresponding folders for shapefile .. )
      legendSrc -- filename of the lagend (place it in the legend folder)
      selected -- If the dataset should be selected by default
      link -- link for data download (optional)
      style -- custom styles for shapefiles and rasters (create them in mapstyling.js and add them here)
      

      ONLY FOR SHAPEFILES 
      styleProperty -- the property you want to use for styling the map (if conditional styling based on properties in the shapefile)
      tooltip -- created in tooltips.js
      popup -- created in popups.js
      
      If map layer is linked to chart:
      chartProperties -- which properties from the shapefile to be used 
      namesOfProperties -- Names of the properties (use the same names in the chart for the colors)
       */
      datasets: [
        {
          id: 0,
          sectionID: 0,
          title: "Simple shapefile",
          type: "shapefile",
          src: "AOI.zip",
          style: Style().redOutline,
          legendSrc: "exampleLegend3.png",
          selected: false,
          link: "https://en.wikipedia.org/wiki/Region_of_interest",
        },
        {
          id: 1,
          sectionID: 0,
          title: "Pointmap",
          type: "shapefile",
          src: "nationalParks.zip",
          legendSrc: "nationalParksLegend.png",
          selected: false,
          icon: "forest.svg",
          tooltip: Tooltip().nameTooltip,
          popup: Popup().examplePopup,
        },
        {
          id: 2,
          sectionID: 1,
          title: "Tileset",
          type: "tiles",
          src:
            "https://charlottegiseleweil.github.io/tiles/amazon/Dengue_PEM_pres/{z}/{x}/{y}.png",
          legendSrc: "exampleLegend4.png",
          selected: false,
        },
        {
          id: 3,
          sectionID: 1,
          title: "Raster",
          type: "raster",
          src: "exampleRaster.tif", // must be projected with EPSG:4326
          style: Style().greenAndRedRaster,
          legendSrc: "exampleLegend2.png",
          selected: false,
        },
        // Example of map layer linked to chart
        {
          id: 4,
          sectionID: 2,
          title: "Styled shapefile",
          type: "shapefile",
          src: "Watersheds.zip",
          style: Style().redToBlue,
          styleProperty: "Base_idx",
          legendSrc: "exampleLegend1.png",
          selected: true,
          chartProperties: ["L_ann", "Qf_ann", "Qb_ann"], // properties from the shapefile to display on the chart
          namesOfProperties: ["Property1", "Property2", "Property3"], // Names of the properties (use the same names in the chart for the colors)
        },
      ],

      /* A chart include:
      title -- chart title
      yLabel -- label of y axis
      columns -- data for the chart - the first row includes the x-labels
      colors -- colors for the data 
      type -- line or bar
      yMax,yMin -- optional max and min values for the y-axis*/
      chart: {
        title: "Chart linked to map",
        yLabel: "Example y Label",
        columns: [], // empty if linked chart
        colors: {
          // same name as stated in the namesOfProperties
          Property1: "#66383D",
          Property2: "#EAC7CB",
          Property3: "E67F8B",
        },
        type: "bar",
        yMax: 2500, // optional max value on axis
      },

      /* Example of non linked chart
          
          title: "Example Line chart",
          yLabel: "Example y Label",
          sectionID: 1,
          chartID: 0,
          columns: [
            ["x-label", "Label-1", "Label-2", "Label-3"],

            ["Data-1", 30, 10, 25],
            ["Data-2", 11, 13, 5],
            ["Data-3", 10, 15, 20],
          ],
          colors: {
            "Data-1": "#a6a6a6",
            "Data-2": "#ffd633",
            "Data-3": "#009933",
          },
          type: "line",
        }, */
    },
  };
}

export default Data;
