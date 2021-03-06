Demo: http://viz.naturalcapitalproject.org/viewerTemplate/

This is a template for creating your own map-based dashboard <br/>

You will find here detailed information to use the viewerTemplate.

# Set up

1. Install [node.js](https://nodejs.org/en/download/), and a text editor (e.g  [VScode](https://code.visualstudio.com/download) )
2. Download or clone this repository and open the project directory in your text editor
<img width="700" alt="portfolio_view" src="readme_gifs/git_clone.gif">

3. Open the terminal in your project directory and run `npm install` - this will install all dependencies
<img width="700" alt="portfolio_view" src="readme_gifs/npm_install.gif">

4. Run `npm start` -- this will run the app in the development mode.<br />
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   The page will reload if you make edits.<br />
   You will also see any errors in the console. <br />
   *The browser might open http://localhost:3000/viewerTemplate by default, the "viewerTemplate" part of the link will be removed once you follow the steps in "Deploying the dashboard to GitHub pages"*
   <img width="700" alt="portfolio_view" src="readme_gifs/npm_start.gif">
   
## Display shapefiles

### Add the dataset
1. Add the zipped shapefile to src/data/shapefiles
<img width="700" alt="portfolio_view" src="readme_gifs/add_data_to_folder.gif">

2. Add the legend to src/data/legends
<img width="700" alt="portfolio_view" src="readme_gifs/add_legend_to_folder.gif">

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
<img width="700" alt="portfolio_view" src="readme_gifs/add_data.gif">

# Deploy viewer online 
1. On github, create a new Github repository (you need to have a GitHub account). We'll deploy the viewer with GitHub pages.
<img width="700" alt="portfolio_view" src="readme_gifs/create_repo.gif">

2. In the `package.json` file, change the `homepage` property to `http://{username}.github.io/{repository-name}/`. (e.g `"homepage": "http://myusername.github.io/myViewer/"`)
<img width="700" alt="portfolio_view" src="readme_gifs/change_homepage.gif">

3. Open your terminal/git bash and navigate to your project folder, change the remote url to your github repo: <br/>
   ```
   git remote set-url origin https://github.com/{username}/{repo-name}.git
   ```
   <img width="700" alt="portfolio_view" src="readme_gifs/change_remote_url.gif">
   
4. Deploy your app, run: `npm run deploy` <br/>
 <img width="700" alt="portfolio_view" src="readme_gifs/run_deploy.gif">
   Yay!! Your app is now running at `https://{username}.github.io/{repo-name}/`
   -----> to update any changes `npm run deploy`
5. (Optional) Push the source code to your Github repo:
```
git add *
git commit -m "Your commit message"
git push origin master
```
