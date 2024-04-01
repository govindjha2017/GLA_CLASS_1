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

// User.create({
//     username:'ajay@123',
//     password:'abc1234',
//     age:35,
//     city:'Noida'
// }).then(()=>{console.log('documnet created Succesfully')});

// READ

// User.find({})
//     .then((data)=>{console.log(data)})

// User.find({age:29,username:'rahul@123'})
//     .then((data)=>{console.log(data)})

// User.findOne({age:35})
//     .then((data)=>{console.log(data)})


//UPDATE

// User.updateOne({age:29},{username:'raushan@123',password:'123456'})
//     .then((x)=>{console.log(x)})

// User.updateMany({city:'Delhi'},{age:45})
//     .then((x)=>{console.log(x)})

// DELETE

// User.deleteOne({})
//     .then((x)=>{console.log(x)})
// User.deleteMany({})
//     .then((x)=>{console.log(x)})

app.listen(4000,()=>{
    console.log('server up at port 4000')
})