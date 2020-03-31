const express = require('express');
const path = require('path');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather ',
    name: 'rj'
  });
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'rj'
  });
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'this is a help page',
    title: 'Help',
    name: 'rj'
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide address'
    })
  }

  geocode(req.query.address, (error, {latitude,longitude,location}={}) => {
    if (error) {
      return res.send({error:error});
    } 
    forecast(latitude,longitude,(error,forecastData)=>{
      if(error){
        return res.send({error:error});
      }
      res.send({
        forecast:forecastData,
        location,
        address:req.query.address
      })
    })
  })
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  console.log(req.query.search);
  res.send({
    products: []
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    error: 'Help article not found',
    title: '404',
    name: 'rj'
  });
})

app.get('*', (req, res) => {
  res.render('404', {
    error: 'My 404 page',
    title: '404',
    name: 'rj'
  })
})
app.listen(3000, () => {
  console.log('Server is up and running on port 3000.')
})