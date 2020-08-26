Demo: http://viz.naturalcapitalproject.org/viewerTemplate/

This is a template for creating your own map-based dashboard <br/>

You will find here detailed information to use the viewerTemplate.

# Set up

1. Install [node.js](https://nodejs.org/en/download/), and a text editor (e.g  [VScode](https://code.visualstudio.com/download) )
3. Download or clone this repository and open the project directory in your text editor
4. Open the terminal in your project directory and run `npm install` - this will install all dependencies
5. Run `npm start` -- this will run the app in the development mode.<br />
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   The page will reload if you make edits.<br />
   You will also see any errors in the console. <br />
   *The browser might open http://localhost:3000/viewerTemplate by default, the "viewerTemplate" part of the link will be removed once you follow the steps in "Deploying the dashboard to GitHub pages"*
   
# Customize viewer 
   
## Configure basemap and parameters
In `src/data/data.js`, there is a short config section to set the map parameters (initial location, zoom level, basemap) and choose whether or not to have infoButtons (that open a secundaryPanel with more text), download icons, etc for the map layers. The `chartIsLinkedTo` parameter specifiies the map layer to which the chart is linked (set datasetID), set to `null` if the chart should not be linked to the map (and then set chart data directly in the chart section). See also [workflow to make a chart](https://github.com/charlottegiseleweil/viewerTemplate/blob/master/Readme_detailed.md#build-an-interactive-chart).


## Edit texts

#### Menu tab
In `src/App.js`, edit the menu links and the name of the viewer. You could also add more tabs by editing the `menuLinks` property (see section _Add a new menu tab_)

#### Left panel
 In `src/components/LeftPanel.js`, you can make custom changes to the left panel - e.g changing the header *Explorer*.

#### About tab
In `src/pages/AboutPage.js`, edit contents of the *About* tab. The array `contributors` can be updated with images (and yes, you can remove our faces, but yes, we’d be offended;)

#### Welcome window 
In `src/components/Landing.js`, edit the welcome window (landing page). This window can be removed in the configuration section (top of `src/data/data.js`)

#### Footer & Title
In `public/index.html`, edit the title of the viewer (appears in browsers). Edit footer in `src/components/Footer.js`, or remove it in `src/App.js`


## Add a new menu tab

1. Creating a new page <br/>
   Go to the pages folder and create a new file e.g. called _NewPage.js_ Initialize it with the following code:

```
import React from "react";

function NewPage(props) {
  return (<div>Place your JSX code here</div>);
}

export default NewPage;
```

The return statement in this component will include all JSX code you want to display on this page ([JSX](https://reactjs.org/docs/introducing-jsx.html) is very similar to HTML). _props_ is a handle to whatever properties you want to link to the component.

2. Make a link in the menu <br/>
   Open `App.js` and start by including the new page in your list of imports. <br/>
   `import NewPage from "./pages/NewPage";` <br/>
   Look at the `menuLink` array and add the following code:

```
{
          title: "New tab",
          path: "/newpage",
          page: <NewPage />,
},
```

The `title` property holds the name you want to be displayed in the menu. The `path` property holds the browser path you want for the new page, and the `page` property holds the Html tag with the new page. <br/>
Done!

# Add data

All external data such as _shapefiles_, _rasters_, _images_, and _legends_ should be placed in their corresponding folders. This viewer supports spatial data in the following formats:

- Shapefiles: saved as a zip and placed in `data/shapefiles`. 
- Rasters: .tif images projected with EPSG:4326 placed in `data/rasters`.
- Tilesets: link to the URL of a tileset needs to be provided in `src/data/data.js`.
- Legends: saved as png or jpg and placed in `data/legends`. For the best results, remove all white space (padding) from the legend image - it will be added in the viewer. 

## Files organisation

#### src/data/data.js

This is where you add links to all your datasets and their information. It is constructed as JSON objects where each dashboard (originally just the one called explorer) has its own properties. <br/>
Each dashboard must contain the following properties: <br/>
`baseMap` <br/>
`dataSections` An array of all the data sections <br/>
`datasets` An array of all the datasets with specified information about which section they belong to, legend image, styling, and source type. <br/>
`chart` The chart to be displayed in the bottom of the left panel. To create a linked chart see "Creating linked charts"

#### src/data/mapStyling.js

Here you can add styling functions for your shapefiles and rasters. All colors should be in HEX.

#### src/data/tooltips.js & popups.js 

Optionally, you can configure (for shapefiles only): 

- tooltips (appear when hovering over the map) 
- popUps (appear when clicking on a map feature)

## Display shapefiles

### Add the dataset
1. Add the zipped shapefile to src/data/shapefiles
2. Open data.js and locate the datasets array 
3. Adding the data
    1. Polygon shapefile --Add a the following object to the array and adjust it to fit your needs
    
    ``` 
    {
             id: 0, // order in the dataset array
             sectionID: 0, // ID of the section the layer belongs to
             title: "Polygon shapefile", // Add your own title
             type: "shapefile",
             src: "shapefile.zip", // the name of your shapefile zip
             legendSrc: "exampleLegend3.png", // the legend -- remove if you don't want a legend
             selected: false, // choose if the layer should be displayed by default
             link: "", // link to download -- remove if you don't want it
     },
    ```

    2. Point shapefile  -- Add a the following object to the array and adjust it to fit your needs 
     ``` 
     {
             id: 0, // order in the dataset array
             sectionID: 0, // ID of the section the layer belongs to
             title: "Point shapefile", // Add your own title
             type: "shapefile",
             src: "pointMap.zip", // the name of your shapefile zip
             icon: "forest.svg", // the icon you want for the point, add it to scr/static/icons
             legendSrc: "exampleLegend3.png", // the legend -- remove if you don't want a legend
             selected: false, // choose if the layer should be displayed by default
             link: "", // link to download -- remove if you don't want it
     },
    ```
### Add Tooltips or Popups
Tooltips and popups are constructed in the same way, functions for tooltips are built in src/data/tooltips.js and popups in src/data/popups.js
Example of adding a tooltip
1. Go to tooltip.js and add the following code within the Tooltip() function:
```
function newTooltip(feature) {
    return "The area is: " + feature.properties.xxx + "sqkm";
  }
```
2. Customize the tooltip and change `xxx` to the property in the shapefile you want to display
3. Add `newTooltip: newTooltip ` to the return object of Tooltip()
4. Find your dataset in the array of datasets in data.js. Add the property `tooltip: Tooltip().newTooltip` to the dataset

### Style a shapefile
Styling functions for the shapefiles are created in src/data/mapStyling.js. Shapefiles can either be styled with the same color for every polygon or with different colors for different values of their properties. 
1. Go to mapStyling.js and add a new colorscale function - Change the values to the range of your shapefile attributes and the colors you want :
```
const newColorScale = (d) => {
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
```
If you have a qml file with your colorscale you can use the function **qml\_to\_javascript.py** to convert the qml to javascript code.
Place the qml file in the **utils** folder and write the following in the terminal:
```
cd utils
python qml_to_javascript.py --qml color.qml
```
The javascript code will be displayed directly in the terminal

2. Locate the Style() function, inside it, add a new styling function : 
```
function newColorStyle(feature) {
    return {
      fillColor: newColorScale(feature),
      weight: 0.5, // thickness of borders
      opacity: 0.9,
      color: "#958f8f", // color of borders
      fillOpacity: 0.5,
    };
  }
```
3. Add `newColorStyle: newColorStyle ` to the return object of Style()
4. Find your dataset you want to style in the array of datasets in data.js. Add the following properties to the dataset:
```
style: Style().newColorStyle, 
styleProperty: "xxx", // change to the name of the shapefile property you want the styling to be based on
```

If you want the same styling for all polygons skip step 1-2 and only add the color you want to `fillColor`

## Display rasters
### Add the dataset
1. Add the .tif file to src/data/rasters
2. Open data.js and locate the datasets array 
3. Adding the data
    ``` 
    {
          id: 0, // Order in array
          sectionID: 0, // ID of the section the layer belongs to
          title: "Raster",
          type: "raster",
          src: "exampleRaster.tif", // must be projected with EPSG:4326
          style: Style().greenAndRedRaster, // change this for different styling
          legendSrc: "exampleLegend2.png", // the legend -- remove if you don't want a legend
          selected: false, // choose if the layer should be displayed by default
          link: "", // link to download -- remove if you don't want it
     },
    ```
### Style a raster
1. Go to mapStyling.js and add a new color function - Change the values to the range of your properties and the colors you want
```
const newColorFunction = (d) => {
  switch (d) {
    case 1: // if the data value == 1
      return "#ab1700";
    case -1: // if the data value == -1
      return "#00ab39";
    default:
      return null;
  }
};
```
If you have a qml file with your colorscale you can use the function **qml\_to\_javascript.py** to convert the qml to javascript code.
Place the qml file in the **utils** folder and write the following in the terminal:
```
cd utils
python qml_to_javascript.py --qml color.qml
```
The javascript code will be displayed directly in the terminal

2. Add `newColorFunction: newColorFunction` to the return object of Style()
3. Find your dataset you want to style in the array of datasets in data.js. Add the following properties to the raster dataset: `style: Style().newColorFunction`


If your raster takes too long to display online (check once viewer is deployed), the alternative is to serve it as tiles, it's a little more complicated, but do-able! See next section:

## Build and display tilesets
### Build tiles manually (requires Python & GDAL installed)
1. Make colorscale 
From QGIS or ArcGIS, you can export a .qml colorscale, and use**qml\_to\_colortxt.py** to convert to a .txt file in the right format.
```
cd utils
python qml\_to\_colortxt.py --qml color.qml --txt color.txt
```
2. Color your raster `{raster.tif}` with this colorscale
```
 gdaldem color-relief raster.tif color.txt temp/colored_raster.tif 
```
3. Build tiles (this can be time consuming with large rasters)
```
python gdal2tilesXYZ.py -v -x -e -z 3-13 -r near temp/colored_raster.tif tileset_Folder
```
### Host/serve tilesets
1. Make a new github repository for tilesets, and add your new tileset. ([Mine](https://github.com/charlottegiseleweil/tiles), as an example)
2. Publish it as Github Pages (Github Repository> Settings>Options>GitHub Pages. Choose "master branch" as source). It will take a couple minutes to publish.

### Add tiles layer link
The URL to your tileset is: `https://{username}.github.io/{tiles-repository-name}/{tileset-folder-name}/{x}/{y}/{z}` (leave {x}/{y}/{z} exactly as is). <br/>

Locate the datasets array in src/data/data.js and add the following code:
```
{
          id: 0, // order in dataset array
          sectionID: 0, // ID of the section the tileset should belong to
          title: "Tileset",
          type: "tiles",
          src:
            "https://{username}.github.io/{tiles-repository-name}/{tileset-folder-name}/{x}/{y}/{z}.png", // change to youur github and repo
          legendSrc: "exampleLegend4.png", // the legend -- remove if you don't want a legend
          selected: false, // choose if the layer should be displayed by default
          link: "", // link to download -- remove if you don't want it
 },
```


## Build an interactive chart
### Option 1: Chart is not linked to maps
1. Set `chartIsLinkedTo: null` in the configuration in `data.js`
1. Locate the chart object in the bottom of data.js
2. Change the code within chart {} to the following code:
```
          title: "Example Line chart",
          yLabel: "Example y Label",
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
```
3. Change the labels, data and the colors as you like

### Option 2: Chart linked to map, linking to a shapefile layer
1. Set `chartIsLinkedTo: {datasetId}` in the configuration in `data.js`
2. Add the following properties to the dataset (has to be a shapefile) the chart should be linked to. <br/>
```
chartProperties: ["xxx","yyy","zzz"] // An array of the names of the properties from the shapefile to be displayed on the chart.
namesOfProperties: ["name1","name2","name3"] // An array of the names you want to display of each properie (the same name should be used to set colors).
```
3. In the chart object in the bottom of data.js, set the columns property to `columns: []` and make sure that the colors match the name you chose in "namesOfProperties":
```
colors: {
          // same name as stated in the namesOfProperties
          "name1": "#66383D",
          "name2": "#EAC7CB",
          "name3": "E67F8B",
        },
```

### Option 3: Chart linked to map, linking to a raster layer
Sorry, this is not implemented (yet), but you can do this with Google Earth Engine fairly easily, and include it as a new tab!

# Deploy viewer online

1. On github, create a new Github repository (you need to have a GitHub account). We'll deploy the viewer with GitHub pages.
2. In the `package.json` file, change the `homepage` property to `http://{username}.github.io/{repository-name}`. (e.g `"homepage": "http://myusername.github.io/myviewer"`)
3. In command line (Open your terminal/git bash and navigate to your project folder), initialize your repo and link it: <br/>
   Open your terminal/git bash and navigate to your project folder<br/>
   ```git init
   git remote add origin https://github.com/{username}/{repo-name}.git```
4. Deploy your app (still in your bash, project directory), run: `npm run deploy` <br/>
   Yay!! Your app is now running at `https://{username}.github.io/{repo-name}/`
5. (Optional) Push the source code to your Github repo:
```
git add *
git commit -m "Your commit message"
git push origin master
```
*To have your viewer hosted on `viz.naturalcapitalproject.stanford.edu/{your-viewer}`, and featured in our visualization gallery, [email us](mailto:chweil@stanford.edu), including the link to your viewer.*

----> To update the viewer when changes made: `npm run deploy`

# Resources

## Advanced Scripts

In the project directory, you can run:

`npm test` launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build` builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## More

To learn React, check out the [React documentation](https://reactjs.org/).
To learn more about how to deploy a React app on Github pages, check out [this](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
