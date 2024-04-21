const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user/cart',(req,res)=>{
    
    
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

module.exports = router;