const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsMate);

mongoose.connect('mongodb://127.0.0.1:27017/E-com-D')
    .then(()=>console.log('E-com-D conected'))
    .catch((err)=>{console.log(err)})
    
app.get('/',(req,res)=>{
    res.render('home');
})

//========ROUTES-----------

const productRoutes = require('./routes/product');

app.use(productRoutes);

const PORT = 5000
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})