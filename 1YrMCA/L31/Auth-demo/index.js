const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge:  1*60*1000
    }
  }))

app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/Mca-auth')
    .then(()=>{console.log('DB conected!')})

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userSchema);


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.post('/signup',async (req,res)=>{
  const {username,password,email} = req.body;
  const existingUser = await User.findOne({username});

  if(existingUser){
     res.redirect('/signup')
  }
  else{
    const hashPaswword = await bcrypt.hash(password, 10);

    
    User.create({username,password:hashPaswword,email})
    res.redirect('/login')
  }
  
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const existingUser = await User.findOne({username});

    if(existingUser?.password==password){
        req.session.username = username;
        res.redirect('/')
    }
    else{
        res.redirect('/login')
    }

})

let islogedin = (req,res,next)=>{
    if(req.session.username){
       next()
    }
    else{
        res.redirect('/login')
    }
}

app.get('/secret',islogedin,(req,res)=>{
    res.send('secret page ')
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login')
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})