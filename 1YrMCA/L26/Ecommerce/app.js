const express = require('express');
const app = express();
const engine = require('ejs-mate');

app.set('view engine','ejs')
app.engine('ejs', engine);

app.get('/',(req,res)=>{
   res.render('home')
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server up at port ',PORT)
})