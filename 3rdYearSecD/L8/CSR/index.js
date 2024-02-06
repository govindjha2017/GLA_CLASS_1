const exp = require('constants');
const express = require('express');
const app = express();

app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

const todos = ['swiming','gaming','dance','coding'];

app.get('/todos',(req,res)=>{
  res.json({todos});
})

app.post('/todos',(req,res)=>{
    console.log(req.body);
    todos.push(req.body.value);

    res.send({
        'sucess':true
    })
})

app.listen(5000,()=>{
    console.log('server up at port 5000');
})