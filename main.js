const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path')
const contextMenu = require('electron-context-menu');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
    icon: "src/img/logo-blocus.png",
    webPreferences: {
      webviewTag: true,
      sanbox: false,
      spellcheck: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('src/html/index.html')
  //open the dev console of chromium
  win.webContents.openDevTools()
  win.webContents.on('did-finish-load', () => {
    contextMenu({
        window: win,
        prepend: (defaultActions, params, win) => [
            // Can add custom right click actions here
        ],
        showInspectElement: false
    });
  });

  app.on("web-contents-created", (e, contents) => {
    if (contents.getType() == "webview") {
      // set context menu in webview contextMenu({ window: contents, });
      contextMenu({
          window: contents,
          prepend: (defaultActions, params, mainWindow) => [
              // Can add custom right click actions here
          ],
          showInspectElement: true
      });
    }
  });
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

