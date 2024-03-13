const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',ejsMate);

app.get('/',(req,res)=>{
    res.render('home')
})

//======ROUTES======

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})