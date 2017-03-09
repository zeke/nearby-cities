const cities = require('./cities.json')
const sphereKnn = require('sphere-knn')

const lookup = sphereKnn(cities)
module.exports = function ({latitude, longitude}, maxResults, maxDistance) {
  return lookup(latitude, longitude, maxResults, maxDistance)
}
