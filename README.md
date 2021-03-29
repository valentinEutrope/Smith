# About App

Smith is a React wep app to manage a role play game.

A Master can create a game and defines the differents elements of his role play game : player template, PNJ / monster template, upload images...

Each guest player can connect to the game created by the master.

The app manage the differents rights between Master and players.

# Install

- Project use Jake library: install locally (devDependencies) with `npm i` and perhaps you need to install it globally `npm i -g jake@latest`
- Now you can list jake task with `jake` command and use `jake install` to run npm i for every scope

If jake doesn't work for any reason, you can launch install manually with `npm i && npm i --prefix ./src/client && npm i --prefix ./src/server`

Now you can run `npm start`.