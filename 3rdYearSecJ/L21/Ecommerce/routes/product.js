const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const {validateProduct} = require('../midillware/validateProduct')
router.get('/products',async (req,res)=>{
    const products = await Product.find({});
    res.render('product/index',{products})
})

router.get('/product/new',(req,res)=>{
    res.render('product/new')
})

router.post('/products',validateProduct,async(req,res)=>{
   const {name,image,price,desc} = req.body;
   await Product.create({name,image,price,desc});
   req.flash('success','Product created Succesfully')
   res.redirect('/products')
})

router.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id).populate('reviews');
    res.render('product/show',{product})
})

module.exports = router;