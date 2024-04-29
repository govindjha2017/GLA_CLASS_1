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
    req.flash('success','Signup Successfully!')
    res.redirect('/login')

})

router.get('/login',(req,res)=>{
    res.render('auth/login')
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    req.flash('success',`Welcome Back , ${req.user.username}`);
    res.redirect('/products');
  });


  router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success','Thank YOU ! Visit again!')
      res.redirect('/products');
    });
  });

module.exports = router