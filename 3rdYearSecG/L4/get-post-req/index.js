const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))  // req.body undefined
app.use(express.static(path.join(__dirname,'public'))); 

app.get('/',(req,res)=>{
    res.send('working fine');
})

app.get('/login',(req,res)=>{
     res.render('login')
})

app.get('/abc',(req,res)=>{
     console.log(req.query);
    res.send('login done! through get req')
})

app.post('/abc',(req,res)=>{
    console.log(req.body);
   res.send('login done! through post req')
})


app.listen(4000);