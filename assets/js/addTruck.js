var addTruckForm = document.querySelector('#add-truck');

addTruckForm.addEventListener('submit', e => {
  e.preventDefault();
  var addTruckInfo = {};
  var addTruckLocation = {};
  addTruckInfo.name = document.querySelector('#truck-name').value;
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
      },
      error => {
        console.log(`Error: ${error}`);
      }
    );
}
