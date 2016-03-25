const assert = require('assert')
const turf = require('turf')
const cities = require('all-the-cities')
  .filter(city => {
    return !!city.lat && !!city.lon
  })

module.exports = function (input) {
  assert(input, 'function requires an object with `latitude` and `longitude` properties')

  if (input && input.coords) {
    input.latitude = input.coords.latitude
    input.longitude = input.coords.longitude
  }

  var center = turf.point([input.longitude, input.latitude])

  return cities
    .map(city => {
      city.point = turf.point([city.lon, city.lat])
      return city
    })
    .sort((a, b) => {
      b.distance = turf.distance(b.point, center)
      a.distance = turf.distance(a.point, center)
      return a.distance - b.distance
    })
}
