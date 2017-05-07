const describe = require('mocha').describe
const it = require('mocha').it
const assert = require('assert')

const nearbyCities = require('..')

describe('nearby-cities', function () {
  it('accepts an object containing latitude and longitude', function () {
    const query = {latitude: 34.4362755, longitude: -119.705086}
    const cities = nearbyCities(query, 5)

    assert.equal(cities[0].name, 'Mission Canyon')
    assert.equal(cities[1].name, 'Santa Barbara')
    assert.equal(cities[2].name, 'Montecito')
    assert.equal(cities[3].name, 'Summerland')
    assert.equal(cities[4].name, 'Goleta')
  })

  it('accepts a browser-style Geoposition object', function () {
    const query = {
      coords: {
        latitude: 34.4362755,
        longitude: -119.705086
      },
      timestamp: 1458878612120
    }
    const cities = nearbyCities(query, 5)

    assert.equal(cities[0].name, 'Mission Canyon')
    assert.equal(cities[1].name, 'Santa Barbara')
    assert.equal(cities[2].name, 'Montecito')
    assert.equal(cities[3].name, 'Summerland')
    assert.equal(cities[4].name, 'Goleta')
  })
})
