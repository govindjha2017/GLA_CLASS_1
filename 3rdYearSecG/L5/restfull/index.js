const express = require('express');
const app = express();

const users = require('./data/user');
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/users',(req,res)=>{
    res.render('users',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    const {username,password,city}= req.body;
    let user ={
        id:users.length+1,
        username,password,city
    }
    users.push(user);
    res.redirect('/users')
})

app.listen(4000);