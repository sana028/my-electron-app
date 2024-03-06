const { app, BrowserWindow } = require('electron');  
const path = require('path');

let isDev;
import('electron-is-dev').then((module) => {
   isDev = module.default;
  // Your code here
});
let mainWindow;
// eslint-disable-next-line no-unused-vars
function createWindow() {
   mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  console.log(isDev)
  const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

  // mainWindow.loadURL('/public/index.html'); // Assuming your React app runs on port 3000

  mainWindow.loadURL(startURL);
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
  }

  app.on('ready', createWindow);
