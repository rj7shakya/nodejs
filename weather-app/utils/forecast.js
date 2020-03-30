const request = require('request');

const forecast = (latitute, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/f8f7d9383817711cdd83be3715f181a2/' + latitute + ',' + longitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('unable to connect to weather services.',undefined);
    } else if (response.body.error) {
      callback('Unable to find location',undefined);
    } else {
      callback(undefined,response.body.daily.data[0].summary + " it is currently " +
        response.body.currently.temperature + " degrees out there. There is " + response.body.currently.precipProbability + "% chances of rain");
    }
  });
}

module.exports = forecast;