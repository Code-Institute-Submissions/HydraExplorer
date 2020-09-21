//Code from Handlebars.js tutorial for ref: https://www.youtube.com/watch?v=wSNa5b1mS5Y

/*hardcoded JSON Data ... written by myself, i will use this as a replacement to user input data as  i dont know how to use databases yet, and will increase
functionality to the members profile by using external API from Spotify to create a dynamic user profile page this can be found in scripts, users.JSON file */

let ourRequest = new XMLHttpRequest();

ourRequest.open("GET", "https://danielboots.github.io/HydraExplorer/assets/data/users.json");
ourRequest.onload = function () {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    let data = JSON.parse(ourRequest.responseText);
    console.log("Users arrays grafting captain! ready to roll");
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

// function createHTML(hydraUserData) {
//   let rawTemplate = document.getElementById("userCardTemplate").innerHTML;
//   let compiledTemplate = Handlebars.compile(rawTemplate);
//   let ourGeneratedHTML = compiledTemplate(hydraUserData);

//   let userContainer = document.getElementById("user-card-container");
//   userContainer.innerHTML = ourGeneratedHTML;

//   console.log(hydraUserData);
// } 

