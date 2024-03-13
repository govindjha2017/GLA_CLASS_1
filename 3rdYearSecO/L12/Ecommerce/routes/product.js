const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('/product',async (req,res)=>{
    const products = await Product.find({});
    console.log(products);
    res.render('product/index',{products})
})

router.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('product/show',{product})
})

module.exports = router;