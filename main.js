//Config
const rendererDevConsole = true

//Doing stuff
const { app, BrowserWindow, session} = require('electron')
const path = require('path')
const contextMenu = require('electron-context-menu')
const URL = require('url').URL

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
    icon: "src/img/logo-blocus.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      sanbox: true,
      spellcheck: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('src/renderer/index.html')

  if(rendererDevConsole === true){
    win.webContents.openDevTools()
  }

  win.webContents.on('did-finish-load', () => {
    contextMenu({
        window: win,
        prepend: (defaultActions, params, win) => [
        ],
        showInspectElement: false
    })
  })

  app.on("web-contents-created", (e, contents) => {
    contents.on('will-attach-webview', (event, webPreferences, params) => {
      delete webPreferences.preload
      webPreferences.nodeIntegration = false
      webPreferences.contextIsolation = true
      webPreferences.sanbox = true
      //if (!params.src.startsWith('https://example.com/')) {
      //  event.preventDefault()
      //}
    })

    if (contents.getType() == "webview") {
      contextMenu({
          window: contents,
          prepend: (defaultActions, params, mainWindow) => [
          ],
          showInspectElement: true
      })
    }
  })
}

app.whenReady().then(() => {
  session
  .fromPartition('some-partition')
  .setPermissionRequestHandler((webContents, permission, callback) => {
    const parsedUrl = new URL(webContents.getURL())

    if (permission === 'notifications') {
      callback(false)
    }

    if (parsedUrl.protocol !== 'https:' || parsedUrl.host !== 'example.com') {
      return callback(false)
    }
  })

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

