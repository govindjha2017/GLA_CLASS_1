const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const {validateProduct} = require('../midillware/validateProduct')

router.get('/products',async (req,res)=>{
   const products = await Product.find({});
   res.render('products/index',{products})
})

router.get('/products/:id',async (req,res)=>{
   const {id} = req.params;
   const product = await Product.findById(id).populate('reviews');
   res.render('products/show',{product});
})

router.get('/product/new',(req,res)=>{
      res.render('products/new')
})

router.post('/products',validateProduct,async (req,res)=>{
   const {name,image,price,desc} = req.body;
   await Product.create({name,image,price,desc});
   res.redirect('/products')
})

module.exports = router;