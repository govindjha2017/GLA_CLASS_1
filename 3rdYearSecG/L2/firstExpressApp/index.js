const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('working fine!')
})
app.get('/project',(req,res)=>{
    res.send('this is our project page')
})
app.get('/payment',(req,res)=>{
    res.send(`<h1>this is payment page 1</h1>`)
})
app.get('/payment',(req,res)=>{
    res.send(`<h1>this is payment page 2</h1>`)
})

 app.get('/login/:username/:password',(req,res)=>{
    console.log(req.params);
    const {username,password} = req.params;
    res.json({username,password});
 })

 app.get('/getData',(req,res)=>{
    console.log(req.query);
    res.send('ok');
 })

app.get('/*',(req,res)=>{
    res.send('404 page not found')
})

const port = 4000;
app.listen(port,()=>{
    console.log('server up at port',port);
});