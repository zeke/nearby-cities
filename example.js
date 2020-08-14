const nearbyCities = require('./')
const assert = require('assert')
const query = { latitude: 34.4362755, longitude: -119.705086 }
const cities = nearbyCities(query)

assert.strictEqual(cities[0].name, 'Mission Canyon')
assert.strictEqual(cities[1].name, 'Santa Barbara')
assert.strictEqual(cities[2].name, 'Montecito')
assert.strictEqual(cities[3].name, 'Summerland')
assert.strictEqual(cities[4].name, 'Goleta')

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
