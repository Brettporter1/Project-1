var addTruckForm = document.querySelector('#add-truck');
$('#use-location').on('click', e => {
  e.preventDefault();
  geolocate.then(() => {
    $('#truck-lat').val(userPos.lat);
    $('#truck-lng').val(userPos.lng);
  });
});
addTruckForm.addEventListener('submit', e => {
  e.preventDefault();
  var addTruckInfo = {};
  var addTruckLocation = {};
  addTruckInfo.name = document.querySelector('#truck-name').value;
  addTruckInfo.description = document.querySelector('#truck-description').value;
  addTruckInfo.foodTypes = document.querySelector('#truck-foods').value;
  addTruckLocation.lat = +document.querySelector('#truck-lat').value;
  addTruckLocation.lng = +document.querySelector('#truck-lng').value;
  const hash = geokit.Geokit.hash(addTruckLocation);
  addTruckInfo.count = 1;
  addTruckInfo.coordinates = new firebase.firestore.GeoPoint(
    addTruckLocation.lat,
    addTruckLocation.lng
  );
  createInFirestore(hash, addTruckInfo);
});

function addTruck(data, location) {}

function createInFirestore(key, data) {
  geocollection
    .doc(key)
    .set(data)
    .then(
      () => {
        console.log('Provided document has been added in Firestore');
        $('#add-truck-modal').css('display', 'none');
      },
      error => {
        console.log(`Error: ${error}`);
      }
    );
}
