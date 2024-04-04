const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session')
const User = require('./model/user');
const bcrypt = require('bcrypt');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge : 1*60*1000
    }
  }))

mongoose.connect('mongodb://127.0.0.1:27017/auth-O')
    .then(()=>{console.log('DB conected!')})

let islogedin = (req,res,next)=>{
      if(req.session.username){
        next()
      }
      else{
        res.redirect('/login')
      }
}

app.get('/',islogedin,(req,res)=>{
    res.render('home')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.post('/signup',async (req,res)=>{
    const {username,password,email} = req.body;

    const hashPassword = await bcrypt.hash(password,10)

    await User.create({username,password:hashPassword,email});
    res.redirect('/login')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const existingUser = await User.findOne({username});
    if(existingUser){
        const check = await bcrypt.compare(password, existingUser.password);
        if(check){
            req.session.username= username;
            res.redirect('/')
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/signup')
    }
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login')
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})