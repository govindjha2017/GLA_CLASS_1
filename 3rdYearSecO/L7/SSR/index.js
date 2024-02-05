const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');

const todos = ['swiming','gaming','coding','exam'];

app.get('/',(req,res)=>{
      res.render('todo',{todos})
})

app.post('/todos',(req,res)=>{
    console.log(req.body);
    todos.push(req.body.todo);
    res.redirect('/')
})

app.listen(5000,()=>{
    console.log('server run at 5000 port')
})