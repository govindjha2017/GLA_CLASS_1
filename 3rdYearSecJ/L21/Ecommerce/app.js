const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const flash = require('connect-flash');

mongoose.connect('mongodb://127.0.0.1:27017/E-com-J')
    .then(()=>console.log('E-com-J DB conected'))
    .catch((err)=>{console.log(err)});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

  app.use(flash())

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.user = req.user;
    res.locals.success = req.flash('success')
    next()
})

app.get('/',(req,res)=>{
    res.render('home')
})

//==========ROUTES========
 const productRoutes = require('./routes/product');
 const reviewRoutes = require('./routes/review')
 const authRoutes = require('./routes/auth')
 const cartRotes = require('./routes/cart');

 app.use(productRoutes);
 app.use(reviewRoutes);
 app.use(authRoutes);
 app.use(cartRotes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port ',PORT);
})