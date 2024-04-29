const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/user/cart/:productId/add',async(req,res)=>{
    const {productId} = req.params;
    const userId = req.user._id;
    const user = await User.findById(userId);
   let existingItem = user.cart.find((cartitem)=>{
       return cartitem.productId==productId
    })

    if(existingItem){
        existingItem.quantity++;
    }
    else{
        user.cart.push({productId})
    };
   user.save();
   res.redirect('back')
})

module.exports = router