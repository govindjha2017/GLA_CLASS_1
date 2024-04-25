const express = require('express');
const router = express.Router();
const User = require('../models/user')
const passport = require('passport')
router.get('/signup',(req,res)=>{
     console.log(req.user)
    res.render('auth/signup')
})

router.post('/signup',async (req,res)=>{
    // console.log(req.body)
     const {username,password,email,role} = req.body;
     const newUser = new User({username,email,role});
     await User.register(newUser,password);
     res.redirect('/login')
})

router.get('/login',(req,res)=>{
    res.render('auth/login')
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    req.flash('success','Welcome back')
    res.redirect('/products');
});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success','Thank You! Visit again')
      res.redirect('/products');
    });
  });

module.exports= router