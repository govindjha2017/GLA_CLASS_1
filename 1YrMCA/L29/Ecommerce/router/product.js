const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const validateProduct = require('../middilware/validateproduct');

router.get('/products',async(req,res)=>{
    const products = await Product.find({})
    res.render('products/index',{products})
})

router.get('/product/new',(req,res)=>{
    res.render('products/new')
})

 
router.post('/products',validateProduct,async(req,res)=>{
    // console.log(req.body);
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc});
    res.redirect('/products');
})

router.get('/product/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const product = await  Product.findById(id);
    res.render('products/edit',{product})
})

router.post('/product/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const {name,image,price,desc} = req.body;
    await Product.updateOne({_id:id},{name,image,price,desc});
    res.redirect('/products');
})
router.get('/product/:id/delete',async (req,res)=>{
    const {id} = req.params;
    await Product.deleteOne({_id:id});
    res.redirect('/products');
})

router.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await  Product.findById(id).populate('reviews');
    res.render('products/show',{product})
})
module.exports = router;