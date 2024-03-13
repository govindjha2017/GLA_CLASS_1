const { Console } = require('console');
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.post('/test',(req,res)=>{
    console.log(req.body);
    res.send('signup done!')
})
app.get('/test',(req,res)=>{
    console.log(req.body);
    res.send('signup done!')
})

app.get('/users/:id',(req,res)=>{
    // const id = req.params.id;
    const {id} = req.params
    res.send('OK')
})

const port = 4000;
app.listen(port,()=>{
    console.log('server run at port ',port)
})