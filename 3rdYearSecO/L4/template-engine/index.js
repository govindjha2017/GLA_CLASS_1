const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    // res.send('working fine')
    res.render('home');
})
app.get('/payment',(req,res)=>{
    // res.send('payement page working fine')
    res.render('payment');
})
const todos = ['gaming','coding','football','cricket']
app.get('/todos',(req,res)=>{
    res.render('todo',{todos});
})
const port = 4000;
app.listen(port);