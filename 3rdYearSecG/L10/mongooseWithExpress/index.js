const express = require('express');
const app = express();
app.set('view engine','ejs');

const Product = require('./model/product');

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/app-G')
    .then(()=>{console.log('DB conected')});


app.get('/',async (req,res)=>{
    const products = await Product.find({});
    res.render('products',{products})
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})