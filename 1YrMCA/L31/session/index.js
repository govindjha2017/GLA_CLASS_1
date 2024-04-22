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
app.get('/set-session',(req,res)=>{
     req.session.x=45;
     res.send('ok')
})
app.listen(4000,()=>{
    console.log('server run at port 4000')
})