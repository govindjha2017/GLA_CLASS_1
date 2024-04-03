const express = require('express');
const app = express();
const engine = require('ejs-mate');
const Product = require('./models/product')
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/Ecom-MCA')
    .then(()=>{console.log('DB conected!')})

app.set('view engine','ejs')
app.engine('ejs', engine);

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
   res.render('home')
})

// ROUTES
const productRoutes = require('./router/product');
const exp = require('constants');

app.use(productRoutes)

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server up at port ',PORT)
})