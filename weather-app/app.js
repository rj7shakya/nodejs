const request = require('request');
const yargs = require('yargs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

console.log(process.argv[2]);


// geocode('Boston', (error, data) => {
//   if(error){
//     return console.log(error);
//   }
//   forecast(data.latitude, data.longitude, (error, forecastData) => {
//     if(error){
//       console.log(error);
//     }

//     console.log('Error', error);
//     console.log('Data', data);
//   });
// })
