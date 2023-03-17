//Config
const log = true

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
var pos = ''
var urlBar = document.createElement('input')
var urls = []
var url = ''
var webviews = []
var webview = ''

const tabGroup = document.querySelector("tab-group")
const shadow = tabGroup.shadowRoot
const views = shadow.querySelector('.views')


//WIP
/*tabGroup.on("tab-added", (tab, tabGroup) => {
  if(tabGroup.getTabs() != null){  
    tabGroup.eachTab(
      function getTabURL() {
        tab.once("webview-ready", (tab) => { 
          webview = tab.webview
        })
      }
    , this)
    //urls = []
    if(webview != '' && webview = shadow.querySelector('')){
      if(log === true){
        console.log('log: Webview created: ', webview)
      }
      webviews.push(webview)
    }
    if(log === true){
      if(webviews.length > 0){
        console.log('log: All webviews: ', webviews)
      }
      console.log('log: How many tabs: ',tabGroup.getTabs().length)
    }
  }
})*/

meta1.setAttribute("class", "meta1-csp")
meta1.setAttribute("http-equiv", "Content-Security-Policy")
meta1.setAttribute("content", "default-src 'self' ; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'")

backButton.setAttribute("id", "backbutton")
backButton.setAttribute("class", "backbutton")
//backButton.setAttribute("onclick", 'back()')
buttonDiv.setAttribute("class", "buttondiv")
divUrl.setAttribute("class", "divurl")
imgBack.setAttribute("class", "imgback")
imgBack.setAttribute("src", "../img/backarrow.png")
imgForw.setAttribute("class", "imgforw")
imgForw.setAttribute("src", "../img/forwarrow.png")
toolBar.setAttribute("class", "toolbar")
formToolBar.setAttribute("class", "formtoolbar")
formToolBar.setAttribute("method", "POST")
forwButton.setAttribute("id", "forwbutton")
forwButton.setAttribute("class", "forwbutton")
//forwButton.setAttribute("onclick", 'forw()')
urlBar.setAttribute("class", "toolbar-input")
urlBar.setAttribute("placeholder", "  http://url.exemple.com  ")

toolBar.appendChild(buttonDiv)
toolBar.appendChild(formToolBar)
divUrl.appendChild(formToolBar)
toolBar.appendChild(divUrl)
buttonDiv.appendChild(backButton)
buttonDiv.appendChild(forwButton)
//backButton.appendChild(imgBack)
//forwButton.appendChild(imgForw)
formToolBar.appendChild(urlBar)

views.prepend(toolBar)

//observer.observe(views, {subtree: true, childList: true})

tabGroup.setDefaultTab({
  title: "New Tab",
  src: "https://google.com",
  active: true
})

