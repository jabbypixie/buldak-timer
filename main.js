const path = require("path");
const { app, BrowserWindow } = require("electron");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Buldak Timer",
    width: 650,
    height: 812,
  });

  mainWindow.loadFile(path.join(__dirname, "./app/index.html"));
}

app.whenReady().then(() => {
  createMainWindow();
});
