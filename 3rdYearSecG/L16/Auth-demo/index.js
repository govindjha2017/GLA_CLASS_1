const express = require('express');
const app = express();
const session = require('express-session');
const User = require('./model/user')

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/auth-G')
    .then(()=>{console.log('DB conected')})
    
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

let islogedin = (req,res,next)=>{
     if(req.session.username){
        next();
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
    const existingUser = await User.findOne({username})
    if(existingUser){
        res.redirect('/signup')
    }
    else{
       await User.create({username,password,email})
       res.redirect('/login')
    }
})

app.get('/login',(req,res)=>{
    res.render('login')
})


app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    let user =  await User.findOne({username})
    if(user && user.password===password){
        req.session.username = username
        res.redirect('/')
    }
    else{
        res.redirect('/login')
    }
})

app.post('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/')
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})