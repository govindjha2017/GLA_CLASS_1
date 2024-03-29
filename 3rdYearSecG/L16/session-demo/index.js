const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true 
  }))

app.get('/',(req,res)=>{
    res.send(req.session)
})

app.get('/set-session/:name',(req,res)=>{
    req.session.name = req.params.name;
    res.send('ok')
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})