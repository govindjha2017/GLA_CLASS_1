const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products',async (req,res)=>{
   const products = await Product.find({});
   res.render('products/index',{products})
})

router.get('/products/:id',async (req,res)=>{
   const {id} = req.params;
   const product = await Product.findById(id).populate('reviews');
   res.render('products/show',{product});
})

module.exports = router;