const tabGroup = document.querySelector("tab-group");
  
  //set default page and title for a new tab
  tabGroup.setDefaultTab({
    title: "New Tab",
    src: "https://google.com",
    active: true
  });
  