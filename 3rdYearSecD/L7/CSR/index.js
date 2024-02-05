const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

const todos = ['swiming','gaming','coding'];

app.get('/todos',(req,res)=>{
    res.json({todos});
})

app.listen(5000,()=>{
    console.log('server up at port 5000');
})