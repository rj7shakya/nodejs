const https = require('https');
const url='https://api.darksky.net/forecast/f8f7d9383817711cdd83be3715f181a2/-31.23,34';

const request = https.request(url,(response)=>{
  let data ='';

  response.on('data',(chunk)=>{
    data += chunk.toString()
  });

  response.on('end',()=>{
    const body = JSON.parse(data);
    console.log(body);
  });


});

request.on('error',(error)=>{
  console.log('An error',error);
});

request.end()