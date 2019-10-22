var map;

var markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
    disableDefaultUI: true,
    styles: mapStyles,
  });

  map.setCenter(userPos);
}

// if new address is selected...
const addressInput = document.querySelector('#address-input > input', {
  types: ['geocode'],
});

const autocomplete = new google.maps.places.Autocomplete(addressInput);
autocomplete.setTypes(['address']);
autocomplete.addListener('place_changed', function() {
  var place = autocomplete.getPlace();
  if (!place.geometry) {
    // User entered the name of a Place that was not suggested and
    // pressed the Enter key, or the Place Details request failed.
    window.alert(`No details available for input: '${place.name}'`);
  }
  if (place.geometry.viewport) {
    map.setCenter(place.geometry.location);
    console.log(place.geometry.location);
    userPos = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    queryTrucks();
  }
});
