const express = require('express');
const app = express();

app.set('view engine','ejs');

const  mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/app-O')
    .then(()=>{console.log('DB conected')});

const Product = require('./model/product');

app.get('/',async (req,res)=>{
    const products = await Product.find({});
    console.log(products);
    res.render('products',{products})
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})