const describe = require('mocha').describe
const it = require('mocha').it
const assert = require('assert')

const nearbyCities = require('..')

describe('nearby-cities', function () {
  it('accepts an object containing latitude and longitude', function () {
    const query = { latitude: 34.4362755, longitude: -119.705086 }
    const cities = nearbyCities(query, 5)

    assert.strictEqual(cities[0].name, 'Mission Canyon')
    assert.strictEqual(cities[1].name, 'Santa Barbara')
    assert.strictEqual(cities[2].name, 'Montecito')
    assert.strictEqual(cities[3].name, 'Summerland')
    assert.strictEqual(cities[4].name, 'Goleta')
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

    assert.strictEqual(cities[0].name, 'Mission Canyon')
    assert.strictEqual(cities[1].name, 'Santa Barbara')
    assert.strictEqual(cities[2].name, 'Montecito')
    assert.strictEqual(cities[3].name, 'Summerland')
    assert.strictEqual(cities[4].name, 'Goleta')
  })
})
