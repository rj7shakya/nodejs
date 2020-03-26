
const express = require('express');
const app = express();


app.use('/add-product',(req,res,next)=>{
  res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">Add product</button></form>');
});

app.use('/product',(req,res,next) => {
  console.log(req.body);
  res.redirect('/');
})

app.use('/',(req,res,next)=>{
  console.log('In another middleware');
  res.send('<h1>Hello from express!!</h1>');
});




app.listen(3000);
