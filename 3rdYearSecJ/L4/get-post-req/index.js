const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send('working fine');
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/abc',(req,res)=>{
    res.send('login done! by get')
})
app.post('/abc',(req,res)=>{
    console.log(req.body);
    res.send('login done! by post')
})

app.listen(4000);