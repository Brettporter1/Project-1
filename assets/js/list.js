var db = firebase.firestore();

var truckData;

db.collection('trucks')
  .get()
  .then(querySnapshot => {
    truckData = querySnapshot;
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data().name}`);
      const listing = document.createElement('button');
      listing.classList.add('food-truck');
      const listingName = document.createElement('span');
      listingName.textContent = doc.data().name;
      listing.appendChild(listingName);
      //   const listingPhone = document.createElement('div');
      //   listingPhone.textContent = doc.data().phoneNumber;
      //   listing.appendChild(listingPhone);

      document.querySelector('#truck-list').append(listing);
      const truckPos = { lat: +doc.data().lat, lng: +doc.data().lon };
      // / calculate distances

      const distance = document.createElement('span');
      distance.classList.add('distance-away');
      //   distance.textContent = `Lat: ${doc.data().lat} Long: ${doc.data().lon}`;
      calcDistance(userPos, truckPos, distance);

      //   distance.textContent = truckDistance;
      listing.appendChild(distance);

      console.log(distance.textContent);
      initMap();
    });
  });

function calcDistance(origin, destination, element) {
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false,
    },
    function(response, status) {
      if (status !== 'OK') {
        alert(`Error was: ${status}`);
      } else {
        console.log(response);
        const distance = response.rows[0].elements[0].distance.text;
        element.textContent = distance;
      }
    }
  );
}
