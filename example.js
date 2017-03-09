const assert = require('assert')
const nearbyCities = require('./')
const query = {latitude: 34.4362755, longitude: -119.705086}

const cities = nearbyCities(query)

;[ 'Santa Barbara',
  'Goleta',
  'Isla Vista',
  'Ventura'
].forEach((item, index) => assert.equal(cities[index].name, item))

assert.deepEqual(cities[0],
  {
    name: 'Santa Barbara',
    country: 'US',
    muni: '',
    population: 88410,
    lat: 34.42083,
    lon: -119.69819
  })
