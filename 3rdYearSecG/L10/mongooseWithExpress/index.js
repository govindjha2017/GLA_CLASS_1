const express = require('express');
const app = express();
app.set('view engine','ejs');

const Product = require('./model/product');
app.use(express.urlencoded({extended:true}))
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/app-G')
    .then(()=>{console.log('DB conected')});


app.get('/',async (req,res)=>{
    const products = await Product.find({});
    res.render('products',{products})
})

app.get('/product/new',(req,res)=>{
    res.render('new');
})

app.post('/product/new',async (req,res)=>{
    const {name,price,rating,image,desc} = req.body;
    await Product.create({name,price,rating,image,desc});
    res.redirect('/');
})

app.get('/product/edit/:id', async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findOne({_id:id});
    res.render('edit',{product});
})

app.post('/product/edit/:id', async (req,res)=>{
    const {id} = req.params;
    const {name,price,rating,image,desc} = req.body;
   await Product.updateOne({_id:id},{name,price,rating,image,desc});
   res.redirect('/')
})

app.post('/product/delete/:id',async (req,res)=>{
    const {id} = req.params;
    await Product.deleteOne({_id:id});
    res.redirect('/')
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})