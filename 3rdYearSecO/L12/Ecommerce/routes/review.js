const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.post('/products/:productId',async (req,res)=>{
    const {productId} = req.params;
    const product = await Product.findById(productId);
    const {rating,comment} = req.body;
})