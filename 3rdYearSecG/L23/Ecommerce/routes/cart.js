const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user/cart',async (req,res)=>{
    const userId = req.user._id;
    const user = await User.findById(userId).populate('cart.productId');

    let totalPrice =0;
    user.cart.forEach((cartitem)=>{
      totalPrice += cartitem.productId.price*cartitem.quantity;
    });

    res.render('cart/cart',{user,totalPrice})
})

router.post('/user/:productId/add',async(req,res)=>{
    const {productId} = req.params;
    const userId = req.user._id;
    const user = await User.findById(userId);

    let existingProduct =  user.cart.find((cartItem)=>{
        return cartItem.productId == productId
    })
    if(existingProduct){
        existingProduct.quantity++;
    }
    else{
        user.cart.push({productId})
    }
    user.save() 
    req.flash('success','Item successfully added in cart!')
    res.redirect('back')

})

router.post('/user/:productId/remove',async(req,res)=>{
    const {productId} = req.params;
    const userId = req.user._id;
    const user = await User.findById(userId);

    let existingProduct =  user.cart.find((cartItem)=>{
        return cartItem.productId == productId
    })
    if(existingProduct.quantity>1){
        existingProduct.quantity--;
    }
    else if(existingProduct.quantity==1){
         let ind = user.cart.indexOf(existingProduct);
         user.cart.splice(ind,1);
    }
    user.save() 
    req.flash('success','Item removed from cart!')
    res.redirect('back')

})

module.exports = router;