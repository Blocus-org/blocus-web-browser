const path = require("path")

const tabGroup = document.querySelector("tab-group")
  tabGroup.setDefaultTab({
    title: "New Tab",
    src: "https://google.com",
    active: true
  })

var meta1 = document.getElementById("meta1-csp")
var cssFile = path.join(__dirname, 'style/style.css')

meta1.setAttribute("class", "meta1-csp")
meta1.setAttribute("http-equiv", "Content-Security-Policy")
meta1.setAttribute("content", "default-src 'self' ; style-src 'self' 'unsafe-inline'")

