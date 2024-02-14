const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SEC-J')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')})

const userschema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User = mongoose.model('User',userschema);

// create

// User.create({
//     name:'ajay',
//     email:'ajay@gmail.com',
//     age:24
// }).then(()=>{console.log('documnet created!')})

//READ

// User.find({name:'ankit', age:10})
//     .then((data)=>{console.log(data)});

// User.findOne({name:'ankit', age:10})
//     .then((data)=>{console.log(data)});

//UPDATE

// User.updateOne({name:'ankit'},{'email':'ankit@yahoo.com'})
//     .then((data)=>{console.log(data)});

// User.updateMany({},{age:70})
// .then((data)=>{console.log(data)});

//DELETE

// User.deleteOne({name:'ankit'})
//     .then((data)=>{console.log(data)});

User.deleteMany({})
    .then((data)=>{console.log(data)});