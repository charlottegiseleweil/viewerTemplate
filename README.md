This is a template for creating your own map-based dashboard

## Getting started
1. (optional) Install [VScode](https://code.visualstudio.com/download) or any other text editor you prefer.
2. Install [node.js](https://nodejs.org/en/download/)
3. Download or clone this repository and open the project directory in VScode (or any other code editor) 
4. Open the terminal in your project directory and run `npm install` - this will install all dependencies
5. Run `npm start` -- this will run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Adding your own data
All external data such as *shapefiles*, *images*, and *legends* should be placed in their corresponding folders.

#### public/index.html 
Here you can edit the title of your dashboard

#### src/App.js
In this file, you can edit the menu links and the name of the viewer. You could also add more tabs by editing the `menuLinks`property.

#### src/data/Data.js
This is where you add links all your data sets and their information. It is constructed as json object where each dashboard (originally just one) has its own properties. <br/>
Each dashboard must contain the following properties: <br/>
`baseMap` <br/>
`dataSections` An array of all the data sections <br/>
`datasets` An array of all the datasets with specified information about which section they belong to, legend image, styling, and source type. Currently, only shapefiles and tilesets are implemented. <br/>
`charts` An array of all charts, their data and to which section they belong to. 

#### src/components/mapStyling.js
Here you can add styling functions for your shapefiles -- (optional)

#### src/components/Footer.js
In this file, you can edit the Footer. If you don't want it you can remove it from `App.js`

#### src/components/AboutPage.js
In this file, you can edit the content of the about page. In the beginning of the document, there is a variable called `contributors` where you can add all your contributors and their images. 

#### src/components/Landing.js
In this file, you can edit the Landing page. If you don't want it you can remove it from `App.js`

#### src/components/LeftPanel.js
In this file, you can make custom changes to the left panel 

## Deploying the dashboard to GitHub pages
To do this you need to have a GitHub account
1. Create a Github repository
2. Change the `homepage`property in the `package.json` file. <br />
The new value will be http://{username}.github.io/{repo-name}. {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created. It will look like this <br />
`"homepage": "http://annfr542.github.io/dashboard"`
3. Initialize your repo and add it as a remote in your local git repository. <br/>
Open your git bash and navigate to your project folder<br/>
Initialize it: `git init`<br/>
Add it as remote: `git remote add origin http://{username}.github.io/{repo-name}.git`
4. Deploy your app <br>
In the project directory, run: `npm run deploy` <br/>
Your app is now running at https://{username}.github.io/{repo-name}/
5. (Optional) Push the source code to your Github repo <br />
```
git add *
git commit -m "Your commit message"
git push origin master
```

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

