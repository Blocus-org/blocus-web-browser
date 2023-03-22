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
var refreshButton = document.createElement('button')
var refreshButtonImg = document.createElement('img')
var stopButton = document.createElement('button')
var stopButtonImg = document.createElement('img')
var urlBar = document.createElement('input')
var url = 'Loading...'
var webview = ''

const indicator = ""
const tabGroup = document.querySelector('tab-group')
const shadow = tabGroup.shadowRoot
const views = shadow.querySelector('.views')

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

tabGroup.on("tab-added", (tab, tabGroup) => {
  tab.once("webview-dom-ready", (tab) => {
    webview = tab.webview
  })
  if(log === true) {
    console.log("log: New tab")
  }
})

tabGroup.on("tab-active", (tab, tabGroup) => {
  tab.on("webview-dom-ready", (tab) => {
    webview = tab.webview
    url = webview.getURL()
    pageTitle = webview.getTitle()

    tab.setTitle(pageTitle)
    urlBar.setAttribute("value", url)
    forwButton.setAttribute("onclick", "forward()")
    backButton.setAttribute("onclick", "back()")
    refreshButton.setAttribute("onclick", "refresh()")
  })

  tab.on("active", (tab) => {
    if(tabGroup.getTab(1) != null) {
      try{
        webview = tab.webview
        url = webview.getURL()
        pageTitle = webview.getTitle()

        tab.setTitle(pageTitle)
        urlBar.setAttribute("value", url)
        forwButton.setAttribute("onclick", "forward()")
        backButton.setAttribute("onclick", "back()")
        refreshButton.setAttribute("onclick", "refresh()")
      }
      catch{
        if (err === true) {
          console.log('%cERR: Webview not ready... waiting next event... (WIP)', 'color: red')
        }
      }
    }
  })
  if(log === true) {
      console.log("log: Active tab changed")
  }
})

tabGroup.on("tab-removed", (tab, tabGroup) => {
  urlBar.setAttribute("value", "")
  if(log === true) {
    console.log("log: Deleted tab")
  }
})

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
refreshButton.setAttribute("class", "refreshbutton" )
refreshButtonImg.setAttribute("class", "refreshbuttonimg")
refreshButtonImg.setAttribute("src", "../img/refresh.png")
stopButtonImg.setAttribute("class", "stopbuttonimg")
stopButton.setAttribute("class", "stopbutton" )
stopButtonImg.setAttribute("src", "../img/stop.png")
urlBar.setAttribute("class", "toolbar-input")
urlBar.setAttribute("placeholder", "  http://url.exemple.com  ")

toolBar.appendChild(buttonDiv)
toolBar.appendChild(formToolBar)
divUrl.appendChild(formToolBar)
toolBar.appendChild(divUrl)
buttonDiv.appendChild(backButton)
buttonDiv.appendChild(forwButton)

refreshButton.appendChild(refreshButtonImg)
stopButton.appendChild(stopButtonImg)
buttonDiv.appendChild(refreshButton)

backButton.appendChild(imgBack)
forwButton.appendChild(imgForw)
formToolBar.appendChild(urlBar)

views.prepend(toolBar)

tabGroup.setDefaultTab({
  title: pageTitle,
  src: "https://duckduckgo.com",
  active: true
})
tabGroup.addTab();
