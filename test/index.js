const describe = require('mocha').describe
const it = require('mocha').it
const assert = require('assert')

const nearbyCities = require('..')

describe('nearby-cities', function () {
  it('is a function', function () {
    assert.equal(typeof nearbyCities, 'function')
  })

  it('accepts an object containing latitude and longitude', function () {
    const query = {latitude: 34.4362755, longitude: -119.705086}
    const cities = nearbyCities(query)
    ;[ 'Santa Barbara',
      'Goleta',
      'Isla Vista',
      'Ventura'
    ].forEach((item, index) => assert.equal(cities[index].name, item))
  })

  it('respects max_results', function () {
    const query = {latitude: 34.4362755, longitude: -119.705086}
    const cities = nearbyCities(query, 5)
    assert.equal(cities.length, 5)
  })

  it('respects max distance', function () {
    const query = {latitude: 34.4362755, longitude: -119.705086}
    const cities = nearbyCities(query, 10, 20000)
    assert.equal(cities.length, 3)
  })
})
