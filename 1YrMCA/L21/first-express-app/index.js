const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1>Working fine</h1>`)
})
app.get('/about',(req,res)=>{
    res.send('This is about page1')
})
app.get('/about',(req,res)=>{
    res.send('This is about page2')
})
app.get('/skills',(req,res)=>{
    res.send('skill page')
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})
const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
});