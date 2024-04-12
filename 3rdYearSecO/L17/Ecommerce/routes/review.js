const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const Review = require('../model/review');

router.post('/products/:productId/add',async (req,res)=>{
    const {productId} = req.params;
    const product = await Product.findById(productId);
    const {rating,comment} = req.body;

   let x=  await Review.create({rating,comment});
    product.reviews.push(x);

    product.save()

   res.redirect('back');
})

module.exports = router;