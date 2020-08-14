// This is a Netlify serverless function
//
// https://docs.netlify.com/functions/build-with-javascript

const nearbyCities = require('nearby-cities')
const maxResults = 100
const headers = {
  'Access-Control-Allow-Origin': '*'
}

exports.handler = async function (event, context) {
  if (!event.queryStringParameters.latitude || !event.queryStringParameters.longitude) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'latitude and longitude query params are required' })
    }
  }

  const { latitude, longitude } = event.queryStringParameters
  const cities = nearbyCities({ latitude, longitude }).slice(0, maxResults)

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(cities, null, 2)
  }
}
