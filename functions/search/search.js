// This is a Netlify serverless function
// 
// https://docs.netlify.com/functions/build-with-javascript

const nearbyCities = require("nearby-cities")

exports.handler = async function (event, context) {
  const query = {latitude: 34.4362755, longitude: -119.705086}
  const cities = nearbyCities(query)

  return {
    statusCode: 200,
    body: JSON.stringify(cities, null, 2)
  }
}
