const request = require('request');

const url = 'https://api.darksky.net/forecast/f8f7d9383817711cdd83be3715f181a2/37.8267,-122.4233?lang=es';

request({url:url,json:true},(error,response)=>{

  // console.log(response.body.currently);
  console.log(response.body.daily.data[0].summary +" it is currently "+
  response.body.currently.temperature+" degrees out there. There is "+response.body.currently.precipProbability+"% chances of rain")
});