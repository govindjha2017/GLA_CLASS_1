const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send('login done!')
})
app.listen(4000);