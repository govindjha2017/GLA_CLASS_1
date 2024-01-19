const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/payment',(req,res)=>{
    res.render('payment');
})

const todos = ['gaming','coding','cricket','dance','ludo'];

app.get('/todos',(req,res)=>{
    res.render('abc',{todos});
})

app.listen(4000);