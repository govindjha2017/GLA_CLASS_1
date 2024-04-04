const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport')

router.get('/signup',(req,res)=>{
    res.render('users/signup')
})

router.post('/signup',async (req,res)=>{
    const {username,password,email,role} = req.body;
    let newUser = new User({username,email,role});
    await User.register(newUser,password)
    res.redirect('/login')
})

router.get('/login',(req,res)=>{
    res.render('users/login')
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/products');
  });

module.exports = router;