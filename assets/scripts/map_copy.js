
// // credits: Google maps documentation, code institute Google maps Api, Brad Traversy Google Maps API youtube tutorial.

// // Initialize and add the map
// function initMap() {
//   // The location of Rowlands Gill

//   let options = {
//     zoom: 4,
//     center: { lat: 54.9247, lng: -1.7427 },
//     styles: [
//       {
//         featureType: "all",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             saturation: 36,
//           },
//           {
//             color: "#000000",
//           },
//           {
//             lightness: 40,
//           },
//         ],
//       },
//       {
//         featureType: "all",
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             visibility: "on",
//           },
//           {
//             color: "#000000",
//           },
//           {
//             lightness: 16,
//           },
//         ],
//       },
//       {
//         featureType: "all",
//         elementType: "labels.icon",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "administrative",
//         elementType: "geometry.fill",
//         stylers: [
//           {
//             color: "#000000",
//           },
//           {
//             lightness: 20,
//           },
//         ],
//       },
//       {
//         featureType: "administrative",
//         elementType: "geometry.stroke",
//         stylers: [
//           {
//             color: "#000000",
//           },
//           {
//             lightness: 17,
//           },
//           {
//             weight: 1.2,
//           },
//         ],
//       },
//       {
//         featureType: "administrative",
//         elementType: "labels",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.country",
//         elementType: "all",
//         stylers: [
//           {
//             visibility: "simplified",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.country",
//         elementType: "geometry",
//         stylers: [
//           {
//             visibility: "simplified",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.country",
//         elementType: "labels.text",
//         stylers: [
//           {
//             visibility: "simplified",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.province",
//         elementType: "all",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.locality",
//         elementType: "all",
//         stylers: [
//           {
//             visibility: "simplified",
//           },
//           {
//             saturation: "-100",
//           },
//           {
//             lightness: "30",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.neighborhood",
//         elementType: "all",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "administrative.land_parcel",
//         elementType: "all",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "landscape",
//         elementType: "all",
//         stylers: [
//           {
//             visibility: "simplified",
//           },
//           {
//             gamma: "0.00",
//           },
//           {
//             lightness: "74",
//           },
//         ],
//       },
//       {
//         featureType: "landscape",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#34334f",
//           },
//           {
//             lightness: "-37",
//           },
//         ],
//       },
//       {
//         featureType: "landscape.man_made",
//         elementType: "all",
//         stylers: [
//           {
//             lightness: "3",
//           },
//         ],
//       },
//       {
//         featureType: "poi",
//         elementType: "all",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "poi",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#000000",
//           },
//           {
//             lightness: 21,
//           },
//         ],
//       },
//       {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [
//           {
//             visibility: "simplified",
//           },
//         ],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.fill",
//         stylers: [
//           {
//             color: "#2d2c45",
//           },
//           {
//             lightness: "0",
//           },
//         ],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.stroke",
//         stylers: [
//           {
//             color: "#000000",
//           },
//           {
//             lightness: 29,
//           },
//           {
//             weight: 0.2,
//           },
//         ],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#7d7c9b",
//           },
//           {
//             lightness: "43",
//           },
//         ],
//       },
//       {
//         featureType: "road.highway",
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "road.arterial",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#2d2c45",
//           },
//           {
//             lightness: "1",
//           },
//         ],
//       },
//       {
//         featureType: "road.arterial",
//         elementType: "labels.text",
//         stylers: [
//           {
//             visibility: "on",
//           },
//         ],
//       },
//       {
//         featureType: "road.arterial",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#7d7c9b",
//           },
//         ],
//       },
//       {
//         featureType: "road.arterial",
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "road.local",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#2d2c45",
//           },
//           {
//             lightness: "-1",
//           },
//           {
//             gamma: "1",
//           },
//         ],
//       },
//       {
//         featureType: "road.local",
//         elementType: "labels.text",
//         stylers: [
//           {
//             visibility: "on",
//           },
//           {
//             hue: "#ff0000",
//           },
//         ],
//       },
//       {
//         featureType: "road.local",
//         elementType: "labels.text.fill",
//         stylers: [
//           {
//             color: "#7d7c9b",
//           },
//           {
//             lightness: "-31",
//           },
//         ],
//       },
//       {
//         featureType: "road.local",
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//       {
//         featureType: "transit",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#2d2c45",
//           },
//           {
//             lightness: "-36",
//           },
//         ],
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [
//           {
//             color: "#2d2c45",
//           },
//           {
//             lightness: "0",
//           },
//           {
//             gamma: "1",
//           },
//         ],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.stroke",
//         stylers: [
//           {
//             visibility: "off",
//           },
//         ],
//       },
//     ],
//   };
//   //   let rGill = {lat: 54.9247, lng: -1.7427};

//   // The map, centered at Rowlands Gill

//   let map = new google.maps.Map(document.getElementById("map"), options);

//   /*
//     // init Marker, positioned at Rowlands Gill
//     let marker = new google.maps.Marker({
//         position: {lat: 54.9247, lng: -1.7427}, 
//         map: map,
  
//         //change this icon initially from docs as example but need to be logo or better icon.
//         icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
//         });
  
//   let infoWindow = new google.maps.InfoWindow({
//       content: '<h3>Code for Marker position: Rowlands Gill</h3>'
//   });
  
//   marker.addListener('click',function(){
//       infoWindow.open(map, marker);
//   })
//   */


// //   this should be linked to JSON data for users file name: users.json

//   let markers = [
//     {
//       coords: { lat: 54.9247, lng: -1.7427 },
//       iconImage:
//         "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",

//       content:
//         '<h3>Add Marker Test - Card display</h3> <a href="index.html">Index link</a>',
//     },

//     {
//       coords: { lat: 51.513099, lng: -0.1340533 },
//       iconImage: "",

//       content: "<h3>Add Marker Test - Card display Position 2 </h3>",
//     },
//   ];

//   // Loop through markers

//   for (let i = 0; i < markers.length; i++) {
//     addMarker(markers[i]);
//   }

//   // // Markers new.

//   addMarker({
//       coords:{lat: 54.9247, lng: -1.7427},
//       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//       // this content section will be eventually to set the click card event display, for now add a simple head tag.
//       content: '<h3>Add Marker Test - Card display</h3>'
//       });

//   addMarker({
//       coords:{lat: 51.513099, lng: -0.1340533},
//       iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//       // this content section will be eventually to set the click card event display, for now add a simple head tag.
//       content: '<h3>Add Marker Test - Card display Position 2 </h3>'
//       });

// //   typical marker below with no pop up or custom marker.
//   addMarker({coords:{lat: 51.513099, lng: -0.1340533}});

// //   add marker function

//   function addMarker(props) {
//     let marker = new google.maps.Marker({
//       position: props.coords,
//       map: map,

//       //change this icon initially from docs as example but need to be logo or better icon.

//       //   icon: props.iconImage
//     });

//     //check for custom icon - toprevent an undefined value.
//     if (props.iconImage) {
//       marker.setIcon(props.iconImage);
//     }

//     // check content

//     if (props.content) {
//       let infoWindow = new google.maps.InfoWindow({
//         content: props.content,
//       });
//       marker.addListener("click", function () {
//         infoWindow.open(map, marker);
//       });
//     }
//   }
// }





let ourRequest = new XMLHttpRequest();

ourRequest.open("GET", "https://danielboots.github.io/HydraExplorer/assets/data/users.json");
ourRequest.onload = function () {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    let data = JSON.parse(ourRequest.responseText);
    console.log("loaded users - ye shall pass");
    createHTML(data);
  } else { 
    console.log("we connected to the server but it returned an error, no users for ya!");
  }
};
ourRequest.onerror = function () {
  console.log("connection error");
};

ourRequest.send();


for (let i = 0, length = users.length; i < length; i++) {
  let data = users[i],
      latLng = new google.maps.LatLng(data.lat, data.lng); 

  // Creating a marker and putting it on the map
let marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: data.name
  });
}