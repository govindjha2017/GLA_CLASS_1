const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/user/cart/:productId/add',async (req,res)=>{
    const {productId} = req.params;

    const userId = req.user._id;
    const user = await User.findById(userId);

    const exitingProduct = user.cart.find((cartItem)=>{
        return cartItem.productId==productId
    })

    if(exitingProduct){
        exitingProduct.quantity++;
    }
    else{
        user.cart.push({productId})
    }
    user.save()
    res.redirect('back')
});

router.get('/user/cart',async (req,res)=>{
    const userId = req.user._id;
    const user = await User.findById(userId).populate('cart.productId');

    let totalPrice =0;
    user.cart.foreach((cartItem)=>{
        totalPrice += cartItem.productId.price*cartItem.quantity;
    })

    res.render('cart/cart',{user,totalPrice})
})


module.exports = router;