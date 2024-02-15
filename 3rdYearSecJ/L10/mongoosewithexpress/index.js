const express = require('express');
const app = express();

app.set('view engine','ejs')

const mongoose = require('mongoose');
const Product = require('./model/product');

mongoose.connect('mongodb://127.0.0.1:27017/restfull-J')
    .then(()=>{console.log('db conected')})
    .catch(()=>{console.log('DB not conected')})

app.get('/',async(req,res)=>{
    const products = await Product.find({});
    console.log(products);
    res.render('products',products)
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})