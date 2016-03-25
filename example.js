const nearbyCities = require('./')
const query = {latitude: 34.4362755, longitude: -119.705086}
const cities = nearbyCities(query)

assert.equal(cities[0].name, 'Mission Canyon')
assert.equal(cities[1].name, 'Santa Barbara')
assert.equal(cities[2].name, 'Montecito')
assert.equal(cities[3].name, 'Summerland')
assert.equal(cities[4].name, 'Goleta')

console.log(cities[0])

/*
{
  name: "Mission Canyon",
  country: "US",
  altCountry: "",
  muni: "",
  muniSub: "",
  featureClass: "P",
  featureCode: "PPL",
  adminCode: "CA",
  population: 2381,
  lat: 34.45083,
  lon: -119.71291,
  point: {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [
        -119.71291,
        34.45083
      ]
    },
    properties: {}
  },
  distance: 1.7708473508170872
}
*/
