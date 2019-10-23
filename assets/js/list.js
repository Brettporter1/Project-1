var radius = 15;

var truckData;

function queryTrucks() {
  query = geocollection.near({
    center: new firebase.firestore.GeoPoint(userPos.lat, userPos.lng),
    radius: radius * 1.609,
  });
  query.get().then(querySnapshot => {
    truckData = querySnapshot;
    console.log(truckData);
    document.querySelector('#truck-list').innerHTML = '';
    const listHeader = document.createElement('p');
    listHeader.textContent = `We found ${
      querySnapshot.docs.length
    } food trucks within ${radius} miles`;
    document.querySelector('#truck-list').appendChild(listHeader);
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data().name}`);
      console.log(doc.data());
      const listing = document.createElement('button');
      listing.classList.add('food-truck');
      const listingName = document.createElement('span');
      listingName.textContent = doc.data().name;
      listing.appendChild(listingName);

      document.querySelector('#truck-list').append(listing);
      const truckPos = {
        lat: +doc.data().coordinates.latitude,
        lng: +doc.data().coordinates.longitude,
      };
      // / calculate distances

      const distance = document.createElement('span');
      distance.classList.add('distance-away');
      //   distance.textContent = `Lat: ${doc.data().lat} Long: ${doc.data().lon}`;
      calcDistance(userPos, truckPos, distance);

      //   distance.textContent = truckDistance;
      listing.appendChild(distance);

      console.log(distance.textContent);

      listing.addEventListener('click', () => {
        $('#truck-modal .ft-content').empty();
        $('#truck-modal').css('display', 'block');
        const foodtruckHTML = `
        <h2>${doc.data().name}</h2>
        <p>${doc.data().description}</p>
        <p>${doc.data().foodTypes}</p>
        `;
        $('#truck-modal .ft-content').append(foodtruckHTML);
      });
      const icon = {
        url: './assets/images/MT_truck_marker-01.svg', // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(25, 50), // anchor
      };
      const marker = new google.maps.Marker({
        position: truckPos,
        map,
        title: doc.data().name,
        icon,
      });

      markers.push(marker);
    });
  });
}

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

// queryTrucks();
