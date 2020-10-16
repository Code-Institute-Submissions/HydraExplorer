// tutorial video from https://youtu.be/qoN6-rWIYrk?list=PLtV5RF44Yj8S4RcpQehL-2XMuVsJXwNvK to drill in to data, selecting a user gives page id to display data from the JSON index we need

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  results = regex.exec(url);
  if (!results) return null;
  if (!results) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let userId = getParameterByName("id");

//Code from Handlebars.js tutorial for ref: https://www.youtube.com/watch?v=wSNa5b1mS5Y

/*hardcoded JSON Data ... written by myself, i will use this as a replacement to user input data as  i dont know how to use databases yet, and will increase
functionality to the members profile by using external API from Spotify to create a dynamic user profile page this can be found in scripts, users.JSON file */

let ourRequest = new XMLHttpRequest();

ourRequest.open(
  "GET",
  "https://danielboots.github.io/HydraExplorer/assets/data/users.json"
);
ourRequest.onload = function (hydraUserData) {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    let data = JSON.parse(ourRequest.responseText);
    console.log(
      "success from server loading users.json (message from main.js script!) "
    );

    console.log("data recieved from json", data);
    console.log("User identification for selected is : ", userId);

    createHTML(data);
    return hydraUserData;
  } else {
    console.log("we connected to the server but it returned an error");
  }
};
ourRequest.onerror = function () {
  console.log("connection error");
};

ourRequest.send();

/* Handlebars.js - template function, my thoughts.. If has class run this, if not run original function, hydraUserData.users[userId]); */

function createHTML(hydraUserData) {
  let rawTemplate = document.getElementById("userCardTemplate").innerHTML;
  let compiledTemplate = Handlebars.compile(rawTemplate);
  let ourGeneratedHTML = compiledTemplate(hydraUserData);

  if ($("body").hasClass("user-details")) {
    console.log(
      "does the page have the class, user-details ? query returns true thus this is the users.html page!"
    );
    console.log("selected user from index.html", hydraUserData.users[userId]);
    // console.log('selected user from index.html', hydraUserData.users[userId].name);
    // console.log('selected user from index.html', hydraUserData.users[userId].type);
    // console.log('selected user from index.html', hydraUserData.users[userId].location);

    console.log(hydraUserData.users[userId].image);

    // check code with tutor to change css property ... ammendment, figured it out, by chance!
    // let hydraDataHero = $('hydraUserData.users[userId].image');

    // correct data background hero and body sections
    $("#hydra-data-hero").css(
      "background-image",
      "url(" + hydraUserData.users[userId].image + ")"
    );

    $(".bg").css(
      "background-image",
      "url(" + hydraUserData.users[userId].imagebg + ")"
    );
    console.log(hydraUserData.users[userId].imagebg);

    let hydraDataName = $("#hydra-data-name");
    hydraDataName.empty().append(hydraUserData.users[userId].name);

    let hydraDataCName = $("#hydra-data-cname");
    hydraDataCName.empty().append(hydraUserData.users[userId].name);

    let hydraDataTag = $("#hydra-data-tag");
    hydraDataTag.empty().append(hydraUserData.users[userId].tagline);

    let hydraDataTags = $("#hydra-data-tags");
    hydraDataTags
      .empty()
      .append(
        hydraUserData.users[userId].tags[0],
        " ",
        hydraUserData.users[userId].tags[1],
        " ",
        hydraUserData.users[userId].tags[2]
      );

    console.log(hydraUserData.users[userId].tags);

    let hydraDataImp = $("#hydra-data-imp");
    hydraDataImp
      .empty()
      .append(
        "2020 ",
        hydraUserData.users[userId].name,
        " ",
        hydraUserData.users[userId].tagline
      );

    let hydraDataBio = $("#hydra-data-bio");
    hydraDataBio.empty().append(hydraUserData.users[userId].bio);

    let hydraDataGenre = $("#hydra-data-genre");
    hydraDataGenre.empty().append(hydraUserData.users[userId].Genre);
    console.log(hydraUserData.users[userId].Genre);

    let hydraDataSpotifyEmbed = $("#hydra-data-spotify-embed");
    hydraDataSpotifyEmbed
      .empty()
      .attr("src", hydraUserData.users[userId].spotifyembed);

    let hydraDataYoutubeEmbed = $("#hydra-data-youtube-embed");
    hydraDataYoutubeEmbed
      .empty()
      .attr("src", hydraUserData.users[userId].youtubeembed);

    console.log(hydraUserData.users[userId].youtubeembed);

    //https://stackoverflow.com/questions/179713/how-to-change-the-href-for-a-hyperlink-using-jquery

    //This doesnt seem to be working just yet... check with mentor if cant figure solution myself.

    $("#hydra-data-facebook").attr(
      "href",
      hydraUserData.users[userId].facebook
    );

    $("#hydra-data-twitter").attr("href", hydraUserData.users[userId].twitter);

    $("#hydra-data-instagram").attr(
      "href",
      hydraUserData.users[userId].instagram
    );

    $("#hydra-data-spotify").attr("href", hydraUserData.users[userId].spotify);

    // check to see if user social handles print out correct data for testing purpose
    console.log(hydraUserData.users[userId].facebook);
    console.log(hydraUserData.users[userId].twitter);
    console.log(hydraUserData.users[userId].instagram);
    console.log(hydraUserData.users[userId].spotify);

    // Gallery jQuery - grabbing images from JSON gallery to display per user.

    let hydraDatag1 = $("#hydra-data-g1");
    hydraDatag1.empty().attr("src", hydraUserData.users[userId].gallery[0]);

    let hydraDatag2 = $("#hydra-data-g2");
    hydraDatag2.empty().attr("src", hydraUserData.users[userId].gallery[1]);

    let hydraDatag3 = $("#hydra-data-g3");
    hydraDatag3.empty().attr("src", hydraUserData.users[userId].gallery[2]);

    let hydraDatag4 = $("#hydra-data-g4");
    hydraDatag4.empty().attr("src", hydraUserData.users[userId].gallery[3]);

    let hydraDatag5 = $("#hydra-data-g5");
    hydraDatag5.empty().attr("src", hydraUserData.users[userId].gallery[4]);

    let hydraDatag6 = $("#hydra-data-g6");
    hydraDatag6.empty().attr("src", hydraUserData.users[userId].gallery[5]);

    // console.log(hydraUserData.users[userId].gallery[0]);
    // console.log(hydraUserData.users[userId].gallery[1]);
    // console.log(hydraUserData.users[userId].gallery[2]);
    // console.log(hydraUserData.users[userId].gallery[3]);
    // console.log(hydraUserData.users[userId].gallery[4]);
    // console.log(hydraUserData.users[userId].gallery[5]);
  } else {
    console.log(
      "does the page have the class, user-details ? query returns false thus is the index.html page!"
    );
    /* moved below let = usercontainer in to this scope and else statement to avoid console.log error 'not being declared' this is true as it is not needed in the users.html page only index.html */

    let userContainer = document.getElementById("user-card-container");
    userContainer.innerHTML = ourGeneratedHTML;
  }
}
