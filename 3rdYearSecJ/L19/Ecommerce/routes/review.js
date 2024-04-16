const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

router.post('/products/:id/add',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    const {rating,comment} = req.body;
    let x = await Review.create({rating,comment});
    product.reviews.push(x);
    product.save()
    res.redirect('back')
})

module.exports = router;