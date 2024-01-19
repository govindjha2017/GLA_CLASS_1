const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    // res.send('sab theek')
    res.render('home');
})

const todos = ['gaming','coding','cricket','kuchh bhi'];

app.get('/todos',(req,res)=>{
    
    res.render('todo',{todos});
})
app.get('/payment',(req,res)=>{
    // res.send('sab theek')
    res.render('payment');
})

app.listen(4000);