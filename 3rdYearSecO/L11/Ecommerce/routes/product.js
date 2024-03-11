const express = require('express');
const router = express.Router();
const Product = require('../model/product');

router.get('/product',async (req,res)=>{
    const products = await Product.find({});
    console.log(products);
    res.render('product/index',{products})
})


module.exports = router;