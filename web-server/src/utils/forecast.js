const request = require('request');

const forecast = (latitute, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/f8f7d9383817711cdd83be3715f181a2/' + latitute + ',' + longitude;
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('unable to connect to weather services.',undefined);
    } else if (body.error) {
      callback('Unable to find location',undefined);
    } else {
      callback(undefined,body.daily.data[0].summary + " it is currently " +
        body.currently.temperature + " degrees out there. There is " + body.currently.precipProbability + "% chances of rain");
    }
  });
}

module.exports = forecast;