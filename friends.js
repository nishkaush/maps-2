var map;
const mapDiv = document.getElementById("map");

function initMap() {
  // following constructor function creates the map and injects it into DOM element
  map = new google.maps.Map(mapDiv, {
    center: {
      lat: 29.8613648,
      lng: 77.8598063
    },
    zoom: 9
  });

  // lets create an array with lat and lng coordinates of all roorkee centres
  let healthCentresArr = [{
    position: {
      lat: 29.9357879,
      lng: 78.1336635
    },
    content: `<div id="iw-container">
    <h1>Haridwar Health Center</h1>
    <p>Address: 344 MIG, Vivek Vihar Colony, Haridwar, UA, 249407</p>
    <p>Phone: 9412073651</p>
    <p>Email: www.example.com</p>
    </div>`
  }, {
    position: {
      lat: 30.3254097,
      lng: 77.9469225
    },
    content: ``
  }];


  // following constructor creates a marker --> needs a position to plot and a map to plot it on
  // var marker --> is used later to setup info window which comes up with a click
  // var marker = new google.maps.Marker({
  //   position: {
  //     lat: 29.8613648,
  //     lng: 77.8598063
  //   },
  //   map: map,
  //   animation: google.maps.Animation.Drop,
  // });


  // To initiate an info window, we need to initiate it as with everything else
  // var infoWindow = new google.maps.InfoWindow({
  //   content: "blah blah blah"
  // });

  // Now we can add a click event listener to our marker and open the info window
  // marker.addEventListener("click", function() {
  //   infoWindow.open(map, marker);
  // });



  // To use multiple location in the healthCentresArr, we will loop through it all
  healthCentresArr.forEach(function(e) {
    var marker = new google.maps.Marker({
      position: e.position,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: "hashtag.png"
    });
    var infoWindow = new google.maps.InfoWindow({
      content: e.content
    });
    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  });

} //---> function initMap finishes here
