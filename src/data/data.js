/* 
This file includes the data for all maps, text, legends etc
*/
import Style from "./mapStyling";
import Tooltip from "./tooltips";
import Popup from "./popups";

function Data() {
  return {
    //explorer contains all data that will be displayed on the explorer tab, dublicate anc change if you want several tabs
    explorer: {
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
      infotext -- text that will be diplayed in statistics bar divided into paragraphs
      expanded -- if the secion is expanded or collapsed by default
       */
      dataSections: [
        {
          id: 0,
          title: "Shapefiles",
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
          expanded: true,
        },
        {
          id: 1,
          title: "Rasters and tilesets",
          infotext: [
            {
              subtitle: "Description",
              text: "This section include a tileset as well as a raster (tif).",
            },
          ],
          expanded: false,
        },
        {
          id: 2,
          title: "Interactive chart",
          infotext: [
            {
              subtitle: "Description",
              text:
                "This section has an interactive chart connected to the shapefile. Read about details for this in the readme.",
            },
          ],
          expanded: false,
        },
      ],
      /*
      Each dataset include:
      id -- order in array 
      sectionID -- which section the dataset belongs to
      title -- title of dataset
      type -- what type of source (choose between shapefile, tiles (webhosted) or rasters (tif - must be projected with EPSG:4326)  )
      src -- file name (place the files in the corresponding folders for shapefile .. )
      style -- custom styles for shapefiles and rasters (create them in mapstyling.js and add them here)
      legendSrc -- filename of the lagend (place it in the legend folder)
      selected -- If the dataset should be selected by default
      link -- link for data download (optional)

      ONLY FOR SHAPEFILES 
      tooltip -- created in tooltips.js
      popup -- created in popups.js
      
      chartProperties -- which properties from the shapefile to be used 
      namesOfProperties -- Names of the properties (use the same names in the chart for the colors)
      chartID -- ID of the chart the map should be connected to
       */
      datasets: [
        {
          id: 0,
          sectionID: 0,
          title: "Region of interest",
          type: "shapefile",
          src: "AOI.zip",
          style: Style().redOutline,
          legendSrc: "exampleLegend3.png",
          selected: true,
          link: "https://en.wikipedia.org/wiki/Region_of_interest",
        },
        {
          id: 1,
          sectionID: 0,
          title: "National Parks",
          type: "shapefile",
          src: "nationalParks.zip",
          legendSrc: "nationalParksLegend.png",
          selected: true,
          icon: "nationalPark.svg",
          tooltip: Tooltip().nameTooltip,
          popup: Popup().examplePopup,
        },
        {
          id: 2,
          sectionID: 1,
          title: "Dengue Risk",
          type: "tiles",
          src:
            "https://charlottegiseleweil.github.io/tiles/amazon/Dengue_PEM_pres/{z}/{x}/{y}.png",
          legendSrc: "exampleLegend4.png",
          selected: false,
        },
        {
          id: 3,
          sectionID: 1,
          title: "Future Dengue Risk",
          type: "raster",
          src: "exampleRaster.tif", // must be projected with EPSG:4326
          style: Style().greenAndRedRaster,
          legendSrc: "exampleLegend2.png",
          selected: false,
        },
        // Example of map linked to chart - advanced usage
        {
          id: 4,
          sectionID: 2,
          title: "Watershed indicies",
          type: "shapefile",
          src: "Watersheds.zip",
          style: Style().redToBlue,
          legendSrc: "exampleLegend1.png",
          selected: false,
          chartProperties: ["L_ann", "Qf_ann", "Qb_ann"], // properties from the shapefile to display on the chart
          namesOfProperties: ["Property1", "Property2", "Property3"], // Names of the properties (use the same names in the chart for the colors)
          chartID: 1, // link to corresponding chartID
        },
      ],

      /* Each chart include:
      title -- chart title
      yLabel -- label of y axis
      SectionID -- which dataSection the chart belongs to
      chartID -- order in array
      columns -- data for the chart - the first row includes the x-labels
      colors -- colors for the data 
      interactive -- true or false*/
      charts: [
        {
          title: "Example Chart 1",
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
        },

        // Example of a chart linked to a shapefile
        {
          interactive: true,
          title: "Chart linked to map",
          yLabel: "Example y Label",
          sectionID: 2,
          chartID: 1,
          columns: [], // empty from the beginngin
          colors: {
            // same name as stated in the namesOfProperties
            Property1: "#66383D",
            Property2: "#EAC7CB",
            Property3: "E67F8B",
          },
          yMax: 2500, // optional max value on axis
        },
      ],
    },
  };
}

export default Data;
