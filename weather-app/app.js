const request = require('request');

const url = 'https://api.darksky.net/forecast/f8f7d9383817711cdd83be3715f181a2/37.8267,-122.4233';

request({url:url,json:true},(error,response)=>{

  if(error){

  }else{

  }

  // console.log(response.body.currently);
  // console.log(response.body.daily.data[0].summary +" it is currently "+
  // response.body.currently.temperature+" degrees out there. There is "+response.body.currently.precipProbability+"% chances of rain")
});

// const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFqYWQiLCJhIjoiY2s4ZDQyOXR6MHM2cDNmb2FtZTAzaGoybyJ9.hr-WJPsHOzQKVlQrZ0nikQ&limit=1';
// request({url:mapUrl,json:true},(error,response)=>{
//   const latitude = response.body.features[0].center[1];
//   const latitude = response.body.features[0].center[0];
  
// });