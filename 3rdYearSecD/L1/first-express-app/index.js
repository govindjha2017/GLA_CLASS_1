const express = require('express');
const app =express();


app.get('/',(req,res)=>{
    res.send('working fine')
})
app.get('/cat',(req,res)=>{
    res.send(`<h1>Meowwwwwwwwwww</h1>`)
})
app.listen(4000);


// npm init -y
// npm i express