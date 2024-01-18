const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/project',(req,res)=>{
    res.send('this is project page')
})
app.get('/payment',(req,res)=>{
    res.send(`<h1>this is payment page1</h1>`)
})
app.get('/payment',(req,res)=>{
    res.send(`<h1>this is payment page2</h1>`)
})
app.get('/cat',(req,res)=>{
    res.send('Meowwwww');
})

app.get('/login/:username/:password',(req,res)=>{
    console.log(req.params);
    res.send('ok');
})

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})

const port = 5000
app.listen(port,()=>{
    console.log('server up at port',port);
});