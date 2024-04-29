const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const validateProduct = require('../middilware/validateproduct');
const {islogedIn} = require('../middilware/authorization');
const {isSeller} = require('../middilware/authorization');
router.get('/products',async(req,res)=>{
//    console.log(req.user)
    const products = await Product.find({})
    res.render('products/index',{products})
})

router.get('/product/new',islogedIn,isSeller,(req,res)=>{
    res.render('products/new')
})

 
router.post('/products',validateProduct,islogedIn,isSeller,async(req,res)=>{
    // console.log(req.body);
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc});
    req.flash('success','Product createed !')
    res.redirect('/products');
})

router.get('/product/:id/edit',islogedIn,isSeller,async (req,res)=>{
    const {id} = req.params;
    const product = await  Product.findById(id);
    res.render('products/edit',{product})
})

router.post('/product/:id/edit',islogedIn,isSeller,async (req,res)=>{
    const {id} = req.params;
    const {name,image,price,desc} = req.body;
    await Product.updateOne({_id:id},{name,image,price,desc});
    req.flash('success','Product Updated!!')
    res.redirect('/products');
})
router.get('/product/:id/delete',islogedIn,isSeller,async (req,res)=>{
    const {id} = req.params;
    await Product.deleteOne({_id:id});
    req.flash('success','Product deleted successfully!')
    res.redirect('/products');
})

router.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await  Product.findById(id).populate('reviews');
    res.render('products/show',{product})
})
module.exports = router;