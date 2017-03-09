const cities = require('cities15000')
const fs = require('fs')
const through = require('through2')
const split = require('split2')

const results = []
const rowstream = through(function (line, enc, next) {
  const row = line.toString().split('\t').reduce(function (acc, x, ix) {
    const key = cities.fields[ix]
    if (key === 'alternativenames') x = x.split(',')
    if (key === 'lat' || key === 'lon') x = parseFloat(x)
    if (key === 'elevation') x = x ? parseInt(x, 10) : undefined
    if (key === 'population') x = x ? parseInt(x, 10) : undefined

    acc[key] = x
    return acc
  }, {})
  if (!row.id) return

  results.push({
    name: row.name,
    country: row.country,
    altcountry: row.altcountry,
    muni: row.municipality,
    munisub: row.municipalitysubdivision,
    featureclass: row.featureclass,
    featurecode: row.featurecode,
    admincode: row.admincode,
    population: row.population,
    lat: parseFloat(row.lat),
    lon: parseFloat(row.lon)
  })

  next()
})

fs.createReadStream(cities.file)
  .pipe(split())
  .pipe(rowstream)

rowstream.on('finish', function () {
  console.log(JSON.stringify(results))
})
