const { Console } = require('console');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Sec-O')
    .then(()=>{console.log('Db Conected!')})
    .catch(()=>{console.log('DB not conected')});

const userschema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const User = mongoose.model('User',userschema);

// CREATE
// User.create({
//     name:'ajay',
//     email:'ajay@gmail.com',
//     age:45
// }).then(()=>{console.log('document created suceesfully')})

// READ
// User.find({})
//     .then((data)=>{console.log(data)});

// User.findOne({})
//     .then((data)=>console.log(data));

// User.findOne({age:45})
//     .then((data)=>console.log(data));

// User.find({age:45})
//     .then((data)=>console.log(data));

// UPDATE

// User.updateOne({name:'rahul'},{email:'rahul@yahoo.com'})
//     .then((data)=>{console.log(data)});

// User.updateMany({name:'rahul'},{age:20})
//     .then((data)=>{console.log(data)});

//DELETE

// User.deleteMany({name:'rahul'})
//     .then((data)=>{console.log(data)});

User.deleteMany({})
    .then((data)=>{console.log(data)});