const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index',{
    title: 'Weather ',
    name :'rj'
  });
})

app.get('/about',(req,res)=>{
  res.render('about',{
    title: 'About',
    name:'rj'
  });
})

app.get('/help',(req,res)=>{
  res.render('help',{
    message:'this is a help page',
    title:'Help',
    name:'rj'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Boston',
    forecast: '90 degrees'
  })
})

app.get('/help/*',(req,res)=>{
  res.render('404',{
    error:'Help article not found',
    title:'404',
    name:'rj'
  });
})

app.get('*',(req,res)=>{
  res.render('404',{
    error:'My 404 page',
    title:'404',
    name:'rj'
  })
})

app.listen(3000, () => {
  console.log('Server is up and running on port 3000.')
})