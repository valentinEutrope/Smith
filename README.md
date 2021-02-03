# About App

Smith is a React wep app to allow to manage a role play gaming.

A Master can create a game and define the differents things of his role play game : player template, PNJ / monster template, upload images / music...

Each guest player can connect to the game created by the master.

The app manage the differents rights between Master and players (ex: a player can't modify a template).

# Install

- Project use Jake library: install locally (devDependencies) with `npm i` and perhaps you need to install it globally, use version 8 `npm i -g jake@8.1.1`
- Now you can list jake task with `jake` and use `jake install` to run npm i for every scope

If jake doesn't work for any reason, you can launch install manually with `npm i && cd src/client && npm i && cd ../server && npm i`

Now you can run npm start from root project

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
