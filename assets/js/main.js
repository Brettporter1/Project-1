// Default user position (middle of KC)
let userPos = {
  lat: 39.093182,
  lng: -94.586118,
};
initMap();
// Try to use geolocation
geolocate
  .then(location => {
    console.log(userPos);
    if (location) {
      userPos = location;
    }
    // Move map...
    map.setCenter(userPos);
    // run the query for trucks
    queryTrucks();
  })
  .catch(err => {
    // couldn't get geolocation
    console.log(err);

    // run that shit anyway
    queryTrucks();
  });

// / Change Search Radius
const distanceForm = document.querySelector('#distance');

distanceForm.addEventListener('submit', e => {
  e.preventDefault();
  radius = document.querySelector('#miles').value;
  queryTrucks();
});
