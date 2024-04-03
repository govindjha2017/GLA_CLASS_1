const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local')

mongoose.connect('mongodb://127.0.0.1:27017/E-com-G')
    .then(()=>{console.log('DB conected!')})
    .catch((err)=>{console.log(err)});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsMate);

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.get('/',(req,res)=>{
    res.render('home')
})

//======ROUTES======

const productroutes = require('./routes/product');
const reviewRoutes = require('./routes/review');

app.use(productroutes);
app.use(reviewRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})