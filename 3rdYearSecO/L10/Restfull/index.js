const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

const  mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/app-O')
    .then(()=>{console.log('DB conected')});

const Product = require('./model/product');

app.get('/',async (req,res)=>{
    const products = await Product.find({});
    console.log(products);
    res.render('products',{products})
})

app.get('/product/new',(req,res)=>{
        res.render('new')
})

app.post('/product/new',async(req,res)=>{
    console.log(req.body);
    const {name,price,rating,image,desc} = req.body;
    await Product.create({name,price,rating,image,desc});
    res.redirect('/');
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})