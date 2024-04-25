const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport')
router.get('/signup',(re,res)=>{
    res.render('auth/signup')
})

router.post('/signup',(req,res)=>{
    const {username,password,email,role} = req.body;
 
    const user = new User({username,email,role});

    User.register(user,password);

    res.redirect('/login')

})

router.get('/login',(req,res)=>{
    res.render('auth/login')
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/products');
  });

module.exports = router