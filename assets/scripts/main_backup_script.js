// tutorial video from https://youtu.be/qoN6-rWIYrk?list=PLtV5RF44Yj8S4RcpQehL-2XMuVsJXwNvK to drill in to data, selecting a user gives page id to display data from the JSON index we need

function getParameterByName(name, url) {
    if (!url) url=window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        results = regex.exec(url);
        if(!results) return null;
        if(!results) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
} 



//Code from Handlebars.js tutorial for ref: https://www.youtube.com/watch?v=wSNa5b1mS5Y

/*hardcoded JSON Data ... written by myself, i will use this as a replacement to user input data as  i dont know how to use databases yet, and will increase
functionality to the members profile by using external API from Spotify to create a dynamic user profile page this can be found in scripts, users.JSON file */

  



let ourRequest = new XMLHttpRequest();

ourRequest.open("GET", "https://danielboots.github.io/HydraExplorer/assets/data/users.json");
ourRequest.onload = function () {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    let data = JSON.parse(ourRequest.responseText);
    console.log("A OK El Capitan coming from main.js !");

  console.log(data)
    createHTML(data);
    
  } else {  
    console.log("we connected to the server but it returned an error");
  }
};
ourRequest.onerror = function () {
  console.log("connection error");
};

ourRequest.send();


// Handlebars.js - template function

function createHTML(hydraUserData) {
  let rawTemplate = document.getElementById("userCardTemplate").innerHTML;
  let compiledTemplate = Handlebars.compile(rawTemplate);
  let ourGeneratedHTML = compiledTemplate(hydraUserData);

  let userContainer = document.getElementById("user-card-container");
  userContainer.innerHTML = ourGeneratedHTML;

} 

let userId = getParameterByName('id');
console.log("User identification for selected is : ", userId);




if ($('body').hasClass('user-details')) {

        console.log('this has the class user-details and is the users.html page!');

} else {
    console.log('this does not have the class user-details and is the index.html page!');
}

