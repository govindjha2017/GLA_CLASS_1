const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('working fine!!');
})
app.get('/project',(req,res)=>{
    res.send('this is our project page1')
})

app.get('/project',(req,res)=>{
    res.send('this is our project page2')
})

app.get('/contact',(req,res)=>{
    res.send(`<h1>this is our contact page</h1>`)
})


app.get('/*',(req,res)=>{
    res.send('404 page not found')
})

app.listen(4000);