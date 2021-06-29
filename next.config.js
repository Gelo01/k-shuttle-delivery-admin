const withSass = require('@zeit/next-sass')
  module.exports = withSass()

module.exports = {
  images: {
    domains: [`mykoreankitchen.com`,`picsum.photos`],

  },
  env: {
    MAPBOX_KEY: "pk.eyJ1IjoidW5zaWdhMjUiLCJhIjoiY2txMXVlYWFiMGlqbTJ1cDg0ajN3aWJpdCJ9._xUtbcMizegKO_jKubM6dA",
  },
  
};