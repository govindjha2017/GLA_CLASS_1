const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set(path.join(__dirname,'views'));

const todos =['gaming','coding','cricket','kucch bhi']

app.get('/',(req,res)=>{
   res.render('index')
})

app.get('/todos',(req,res)=>{
    res.render('todo',{todos});
})

const port = 4000;
app.listen(port,()=>{
    console.log('server up at port',port)
})