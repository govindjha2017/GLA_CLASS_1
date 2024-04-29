const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const Product = require('../models/product')

router.post('/products/:id/review',async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    const {rating} = req.body;
    let comment = req.body.comment;
    comment = comment.split('/r')[0];
    let review = await Review.create({rating,comment});
    product.reviews.push(review._id);
    product.save()
 
    res.redirect('back')
})

module.exports = router;