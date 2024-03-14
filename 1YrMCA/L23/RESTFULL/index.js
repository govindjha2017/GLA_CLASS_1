const express = require('express');
const app = express();

app.set('view engine','ejs')
const users = require('./data/user');

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/users',(req,res)=>{
    res.render('index',{users});
})

const port = 5000;
app.listen(port,()=>{
    console.log('server up at port ',port)
})