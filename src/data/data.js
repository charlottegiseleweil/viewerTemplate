/* 
This file includes the data for all maps, text, legends etc
*/
import Style from "./mapStyling";

function Data() {
  return {
    //Duplicate if you want several tabs, dahboard1 is imported to the default dashboard tab in the menu.
    dashboard1: {
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
          title: "First data section",
          infotext: [
            {
              subtitle: "Description",
              text: "This is a description of the data sets",
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
          title: "Second data section",
          infotext: [
            {
              subtitle: "Description",
              text: "This is a description of the data sets ",
            },
            {
              subtitle: "Method",
              text:
                "Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus.",
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
      style -- custom styles for shapefiles and rasters (create them in mapstyling.js and add them here)
      legendSrc -- filename of the lagend (place it in the legend folder)
      selected -- If the dataset should be selected by default
       */
      datasets: [
        {
          id: 0,
          sectionID: 0,
          title: "Area of interest",
          type: "shapefile",
          src: "AOI.zip",
          style: Style().AOI,
          legendSrc: "exampleLegend3.png",
          selected: false,
        },
        {
          id: 1,
          sectionID: 1,
          title: "Watershed indicies",
          type: "shapefile",
          src: "Watersheds.zip",
          style: Style().watersheds,
          legendSrc: "exampleLegend1.png",
          selected: true,
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
          style: Style().raster,
          legendSrc: "exampleLegend2.png",
          selected: false,
        },
      ],

      /* Each chart include:
      title -- chart title
      yLabel -- label of y axis
      SectionID -- which dataSection the chart belongs to
      chartID -- order in array
      columns -- data for the chart - the first row includes the x-labels
      colors -- colors for the data */
      charts: [
        {
          title: "Example Chart 1",
          yLabel: "Example y Label",
          sectionID: 0,
          chartID: 1,
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
        {
          title: "Example Chart 2",
          yLabel: "Example y Label",
          sectionID: 1,
          chartID: 1,
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
        {
          title: "Example Chart 3",
          yLabel: "Example y Label",
          sectionID: 1,
          chartID: 2,
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
      ],
    },
  };
}

export default Data;
