const express = require('express');
const { todo } = require('node:test');
const app = express();
const path = require('path');

// console.log(__dirname);
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json())
const todos = ['swiming','gaaming','coding'];

app.get('/todos',(req,res)=>{
    res.json({todos})
})

app.post('/todos',(req,res)=>{
    console.log(req.body);
    todos.push(req.body.value);
    console.log(todos);
    res.send({
        'sucess':true
    })
})

app.listen(5000,()=>{
    console.log('server up at port 5000');
})