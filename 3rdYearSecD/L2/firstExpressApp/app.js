const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('sab theek!!')
})
app.get('/project',(req,res)=>{
    res.send('this is project page')
})
app.get('/contact',(req,res)=>{
    res.send(`<h1>contact page</h1>`)
})
app.get('/contact',(req,res)=>{
    res.send(`<h1>contact  page 2</h1>`)
})

app.get('/r/:username/:password',(req,res)=>{
    const {username , password} = req.params;
     res.json({
        username,password
     })
})

app.get('/getData',(req,res)=>{
    console.log(req.query);
    res.send('ok');
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})


const port = 4000
app.listen(port ,()=>{
    console.log('server up at port',port);
})