//Config
const log = true
const err = true

//Doing stuff
var backButton = document.createElement('button')
var buttonDiv = document.createElement('div')
var imgForw = document.createElement('img')
var imgBack = document.createElement('img')
var toolBar = document.createElement('div')
var formToolBar = document.createElement('form')
var forwButton = document.createElement('button')
var meta1 = document.getElementById("meta1-csp")
var divUrl = document.createElement('div')
var pageTitle = 'Loading...'
var refreshOrStopButton = document.createElement('button')
var refreshOrStopButtonImg = document.createElement('img')
var urlBar = document.createElement('input')
var url = 'Loading...'
var webview = ''

const indicator = ""
const tabGroup = document.querySelector('tab-group')
const shadow = tabGroup.shadowRoot
const views = shadow.querySelector('.views')

meta1.setAttribute("class", "meta1-csp")
meta1.setAttribute("http-equiv", "Content-Security-Policy")
meta1.setAttribute("content", "default-src 'self' ; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'")
backButton.setAttribute("id", "backbutton")
backButton.setAttribute("class", "backbutton")
buttonDiv.setAttribute("class", "buttondiv")
divUrl.setAttribute("class", "divurl")
imgBack.setAttribute("class", "imgback")
imgBack.setAttribute("src", "../img/backarrow.png")
imgForw.setAttribute("class", "imgforw")
imgForw.setAttribute("src", "../img/forwarrow.png")
toolBar.setAttribute("class", "toolbar")
formToolBar.setAttribute("class", "formtoolbar")
formToolBar.setAttribute("method", "GET")
forwButton.setAttribute("id", "forwbutton")
forwButton.setAttribute("class", "forwbutton")
refreshOrStopButton.setAttribute("class", "refreshorstopbutton" )
refreshOrStopButtonImg.setAttribute("class", "refreshorstopbuttonimg")
urlBar.setAttribute("class", "toolbar-input")
urlBar.setAttribute("placeholder", "  http://url.exemple.com  ")

toolBar.appendChild(buttonDiv)
toolBar.appendChild(formToolBar)
divUrl.appendChild(formToolBar)
toolBar.appendChild(divUrl)
buttonDiv.appendChild(backButton)
buttonDiv.appendChild(forwButton)
buttonDiv.appendChild(refreshOrStopButton)
refreshOrStopButton.appendChild(refreshOrStopButtonImg)
backButton.appendChild(imgBack)
forwButton.appendChild(imgForw)
formToolBar.appendChild(urlBar)

views.prepend(toolBar)

function forward(){
  if(webview.canGoForward()){
    webview.goForward()
    if (log === true) {
      console.log("log: Forward")
    }
  }
}

function back(){
  if(webview.canGoBack())
    webview.goBack()
  if (log === true) {
    console.log("log: Back")
  }
}

function refresh(){
  webview.reload()
  if (log === true) {
    console.log("log: Refresh")
  }
}

function stop() {
  webview.stop()
  if (log === true) {
    console.log("log: Loading stopped by user")
  }
}

tabGroup.on("tab-added", (tab, tabGroup) => {
  tab.once("webview-dom-ready", (tab) => {
    webview = tab.webview
    url = webview.getURL()
    pageTitle = webview.getTitle()
    urlBar.setAttribute("value", url)
    tab.setTitle(pageTitle)
    if(log === true){
      console.log("log: New tab")
    }
  })
})

tabGroup.on("tab-active", (tab, tabGroup) => {
  urlBar.setAttribute("value", url)
  tab.once("webview-dom-ready", (tab) => {
    webview = tab.webview
    webview.addEventListener('did-start-loading', (e) => {
      url = webview.getURL()
      tab.setTitle("Loading...")
      urlBar.setAttribute("value", "Loading..." )
      backButton.setAttribute("onclick","back()")
      forwButton.setAttribute("onclick", "forward()")
      refreshOrStopButton.setAttribute("onclick", "stop()")
      refreshOrStopButtonImg.setAttribute("src", "../img/stop.png")
      if(log === true){
        console.log("log: Loading page on active tab")
      }
    })
    webview.addEventListener('did-stop-loading', (e) => {
      url = webview.getURL()
      urlBar.setAttribute("value", url )
      pageTitle = webview.getTitle()
      tab.setTitle(pageTitle)
      backButton.setAttribute("onclick","back()")
      forwButton.setAttribute("onclick", "forward()")
      refreshOrStopButton.setAttribute("onclick", "refresh()")
      refreshOrStopButtonImg.setAttribute("src", "../img/refresh.png")
      if(log === true){
        console.log("log: Page loaded", url)
      }
    })
  })
  var webviewTypeOf = typeof webview
  if(log === true){
    if(webviewTypeOf === 'object'){
      console.log('webview exists')
    }
  }
  if(webviewTypeOf === 'object' && !webview.isLoadingMainFrame()){
    if(!webview.isLoading()){
      webview.addEventListener('dom-ready', () => {
        webview = tab.webview
        url = webview.getURL()
        urlBar.setAttribute("value", url)
      })
    }
  }
})

tabGroup.setDefaultTab({
  title: pageTitle,
  src: "https://duckduckgo.com",
  active: true
})

tabGroup.addTab();
