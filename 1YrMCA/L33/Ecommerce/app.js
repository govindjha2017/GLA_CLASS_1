const express = require('express');
const app = express();
const engine = require('ejs-mate');
const Product = require('./models/product')
const mongoose = require('mongoose');
const path = require('path');
const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');

const LocalStrategy = require('passport-local');
const User = require('./models/user')

mongoose.connect('mongodb://127.0.0.1:27017/Ecom-MCA')
    .then(()=>{console.log('DB conected!')})

app.set('view engine','ejs')
app.engine('ejs', engine);

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true 
  }))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

app.use((req,res,next)=>{
     res.locals.user= req.user;
     res.locals.success = req.flash('success')
     next()
 })

app.get('/',(req,res)=>{
   res.render('home')
})

// ROUTES
const productRoutes = require('./router/product');
const revieRoutes = require('./router/review');
const authRoutes = require('./router/auth');
const cartRoutes = require('./router/cart');

app.use(productRoutes);
app.use(revieRoutes);
app.use(authRoutes);
app.use(cartRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server up at port ',PORT)
})