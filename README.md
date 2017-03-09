# nearby-big-cities 

Give me your coordinates and I&#39;ll tell you where the nearest cities (and their country)
of at least 15000 people are. Uses k-nearest-neighbour algorithm, so it&#39;s fast. Works offline.
Directly based on git+https://github.com/zeke/nearby-cities.git

## Installation

```sh
npm install nearby-big-cities --save
```

## Usage

```js
const assert = require('assert')
const nearbyCities = require("nearby-big-cities")
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

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [sphere-knn](https://github.com/darkskyapp/sphere-knn): search for k nearest neighbors on a sphere

## Dev Dependencies

- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [split2](https://github.com/mcollina/split2): split a Text Stream into a Line Stream, using Stream 3
- [standard](https://github.com/feross/standard): JavaScript Standard Style
- [through2](https://github.com/rvagg/through2): A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise


## License

MIT
