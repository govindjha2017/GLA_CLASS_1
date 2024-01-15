const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Working fine');
})


 
app.listen(4000);


// npm init -y
// npm i express