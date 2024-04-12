const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./model/user')


app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/E-com-o')
    .then(()=>console.log('E-com-o DB conected'))
    .catch((err)=>{console.log(err)});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
    }))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
    

app.get('/',(req,res)=>{
    res.render('index');
})

///=============ROUTES------------
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

const PORT =4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})