const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/my_database')
    .then(()=>{
        console.log('db conected!')
    })
    .catch(()=>{
        console.log('something went wrong')
    })


app.listen(4000);