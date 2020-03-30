const request = require('request');
const yargs = require('yargs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.argv[2]);
const location = process.argv[2];

if (!location) {
  geocode(location, (error, {latitude,longitude,location}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      }
      console.log('Error', error);
      console.log('Data', forecastData);
      console.log('Location',location);
    });
  })

} else {
  console.log("Please enter the location");
}

