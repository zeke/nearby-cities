# nearby-cities

Give me your coordinates and I'll tell you where the nearest cities are. Works offline.

## Online usage

This module is also available as a hosted HTTP webservice, powered by Netlify serverless functions.

Example query: https://nearby-cities.netlify.app/.netlify/functions/search?latitude=37.871593&longitude=-122.272743

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install nearby-cities --save
```

## Usage

```js
const nearbyCities = require("nearby-cities")
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
  featureClass: "P",
  featureCode: "PPL",
  adminCode: "CA",
  population: 2381,
  lat: 34.45083,
  lon: -119.71291
}
*/

```

## License

MIT
