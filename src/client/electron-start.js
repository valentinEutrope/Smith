const electron = require("electron");
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");
const url = require("url");
const exec = require("child_process").exec;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  const { screen } = require("electron");
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, "electron-preload.js"),
      nodeIntegration: false,
    },
  });

  // and load the content of the app.
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : url.format({
          pathname: path.join(__dirname, "build/index.html"),
          protocol: "file:",
          slashes: true,
        })
  );

  // Open the DevTools.
  //   mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", async () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
app.on("before-quit", () => {
  switch (process.platform) {
    case "win32":
      exec("taskkill -F -IM node.exe", (errExcept, out, err) => {
        if (err) {
          console.error(err);
        }
      });
      break;
    case "linux":
      exec("pkill node", (errExcept, out, err) => {
        if (err) {
          console.error(err);
        }
      });
      break;
  }
});
