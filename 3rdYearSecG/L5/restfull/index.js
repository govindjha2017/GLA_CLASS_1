const express = require('express');
const app = express();

const users = require('./data/user');

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/users',(req,res)=>{
    res.render('users',{users})
})

app.listen(4000);