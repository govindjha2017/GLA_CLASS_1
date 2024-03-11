const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    // res.send('working fine')
    res.render('home')
})
let todos = ['swiming','gaming','cricket','coding'];
app.get('/todos',(req,res)=>{
     res.render('todo',{todos})
})


app.listen(4000,()=>{
    console.log('server run at port 4000');
})