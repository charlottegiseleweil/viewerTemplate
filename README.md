Demo: http://viz.naturalcapitalproject.org/viewerTemplate/

This is a template for creating your own map-based dashboard <br/>
_Do you want your dashboard to be deployed on the official [visualization gallery](http://viz.naturalcapitalproject.org/) of the Natural Capital Project? [Email us](mailto:chweil@stanford.edu) a link to your repo.

## Getting started

1. Install [node.js](https://nodejs.org/en/download/), and a text editor (e.g  [VScode](https://code.visualstudio.com/download) )
3. Download or clone this repository and open the project directory in your text editor
4. Open the terminal in your project directory and run `npm install` - this will install all dependencies
5. Run `npm start` -- this will run the app in the development mode.<br />
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   The page will reload if you make edits.<br />
   You will also see any errors in the console. <br />
   *The browser might open http://localhost:3000/viewerTemplate by default, the "viewerTemplate" part of the link will be removed once you follow the steps in "Deploying the dashboard to GitHub pages"*
   
## Setting up the basemap and configurations 
Go to src/data/data.js <br/>
1. In the top of the file, there is a short config section where you can decide e.g. if you want the datasets to be downloadable or if you want to toggle the landing page
2. Underneath you find the settings for the base map 


## Adding your own data

All external data such as _shapefiles_, _images_, and _legends_ should be placed in their corresponding folders.

#### Implemented data formats

The template has the functionality to include the following formats of spatial data: <br/>

- Shapefiles: saved as a zip and placed in `data/shapefiles`.
- Rasters: .tif images projected with EPSG:4326 place in `data/rasters`.
- Tilesets: link to the URL of a tileset needs to be provided in `src/data/data.js`.

#### src/data/data.js

This is where you add links to all your datasets and their information. It is constructed as JSON objects where each dashboard (originally just the one called explorer) has its own properties. <br/>
Each dashboard must contain the following properties: <br/>
`baseMap` <br/>
`dataSections` An array of all the data sections <br/>
`datasets` An array of all the datasets with specified information about which section they belong to, legend image, styling, and source type. <br/>
`chart` The chart to be displayed in the bottom of the left panel. To create a linked chart see "Creating linked charts"

#### src/data/mapStyling.js

Here you can add styling functions for your shapefiles and rasters. All colors should be in HEX.

#### src/data/tooltips.js - only for shapefiles

Here you can add what properties you want the optional tooltips to display.

#### src/data/popups.js - only for shapefiles

Here you can add what properties you want the optional popups to display.

## Changing text and appearance

#### public/index.html

Here you can edit the title of your dashboard that will appear in the browser tab.

#### src/App.js

In this file, you can edit the menu links and the name of the viewer. You could also add more tabs by editing the `menuLinks` property (see section _Adding a new menu tab_)

#### src/components/Footer.js

In this file, you can edit the Footer. If you don't want it you can remove it from `App.js`

#### src/components/AboutPage.js

In this file, you can edit the content of the about page. At the beginning of the document, there is an array called `contributors` where you can add all your contributors and their images.

#### src/components/Landing.js

In this file, you can edit the Landing page. If you don't want it you can remove it from `data.js`

#### src/components/LeftPanel.js

In this file, you can make custom changes to the left panel - like changing the header "Explorer"

## Linked charts - advanced users.

Linked charts can only be connected to shapefiles.
1. Set `chartIsLinkedTo: {datasetId}` in the configuration in `data.js`
2. Add the following properties to the dataset in the list of all datasets (see data.js). <br/>

- chartProperties []-- an array of the names of the properties from the shapefile to be displayed on the chart.
- namesOfProperties [] -- an array of the names you want to display of each properie (the same name should be used to set colors).
  <br/>
  In the chart object make sure that the columns property is empty and that the colors match the name you chose in "namesOfProperties". 

## Adding a new menu tab (optional)

1. Creating a new page <br/>
   Go to the pages folder and create a new file e.g. called _NewPage.js_ Initialize it with the following code:

```
import React from "react";

function NewPage(props) {
  return (<div>Place your Html code here</div>);
}

export default NewPage;
```

The return statement in this component will include all Html code you want to display on this page. _props_ is a handle to whatever properties you want to link to the component.

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

## Deploying the dashboard to GitHub pages

1. On github, create a new Github repository (you need to have a GitHub account)
2. In the `package.json` file, change the `homepage`property to `http://{username}.github.io/{repository-name}`. (e.g `"homepage": "http://myusername.github.io/myviewer"`)
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
6. To have your viewer hosted on `viz.naturalcapitalproject.stanford.edu/{your-viewer}`, and featured in our visualization gallery, [email us](mailto:chweil@stanford.edu), including the link to your viewer.

## Advanced Scripts

In the project directory, you can run:

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
To learn more about how to deploy a React app on Github pages, check out [this](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
