const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MCA-TEST1')
    .then(()=>{console.log('MCA-TEST DB conected!')})    
    .catch(()=>{console.log('DB not conected')})

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const User = mongoose.model('User',userSchema);

/// CRETAE


User.create({
    username:'rahul@123',
    password:'abc1234',
    age:29,
    city:'Delhi'
}).then(()=>{console.log('documnet created Succesfully')});

// READ


app.listen(4000,()=>{
    console.log('server up at port 4000')
})