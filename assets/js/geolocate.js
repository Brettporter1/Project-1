// Try HTML5 geolocation.
var geolocate = new Promise((res, rej) => {
  if (navigator.geolocation) {
    let geoPosition;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        geoPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: geoPosition }, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              document.querySelector('#address-input > input').value =
                results[0].formatted_address;
            } else {
              console.log('No results found');
            }
          } else {
            console.log(`Geocoder failed due to: ${status}`);
          }
        });

        console.log(position);
        res(geoPosition);
      },
      function(err) {
        console.log('geolocation error');
        rej(err);
      }
    );
  }
});
