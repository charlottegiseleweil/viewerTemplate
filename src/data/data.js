import Style from "./mapStyling";
// All text, links to maps etx. for all dashboards
function Data() {
  return {
    dashboard1: {
      baseMap: {
        src:
          "https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png",
        center: [-12.85, -69.7],
        zoom: 9,
        labelsSrc:
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
      },
      dataSections: [
        {
          id: 0,
          title: "First data section",
          infotext: [
            {
              subtitle: "Description",
              text: "This is a description of the data sets and",
            },
            {
              subtitle: "Method",
              text:
                "The data was created using this and that method and that wes really good.. ",
            },
          ],
          expanded: false,
        },
        {
          id: 1,
          title: "Second data section",
          infotext: [
            {
              subtitle: "Description",
              text: "This is a description of the data sets and",
            },
            {
              subtitle: "Method",
              text: "The data was created using...",
            },
          ],
          expanded: false,
        },
      ],
      datasets: [
        {
          id: 0,
          sectionID: 0,
          title: "Area of interest",
          type: "shapefile",
          scr: "AOI.zip",
          style: Style().AOI,
          selected: false,
          legendSrc: "exampleLegend3.png",
        },
        {
          id: 1,
          sectionID: 1,
          title: "Watershed indicies",
          type: "shapefile",
          scr: "Watersheds.zip",
          style: Style().watersheds,
          selected: false,
          legendSrc: "exampleLegend1.png",
        },
        {
          id: 2,
          sectionID: 1,
          title: "Flood",
          type: "shapefile",
          scr: "Flood.zip",
          style: Style().Flood,
          selected: false,
          legendSrc: "exampleLegend2.png",
        },
      ],
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
