//Code Institute - using xhr and JSON to get data and use from API - for this project im using spofify / testing.

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (this.readyState ==4 && this.status == 200) {
        // document.getElementById('data').innerHTML = this.responseText;
        console.log(JSON.parse(this.responseText));

    

    }
};

xhr.open('GET', 'https://api.spotify.com/v1/artists/6YHEMoNPbcheiWS2haGzkn');

xhr.send();
