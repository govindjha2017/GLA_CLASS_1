const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SEC-D')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')});

const usersschema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User = mongoose.model('User',usersschema);

//CREATE

// User.create({
//     name:'ajay',
//     email:'ajay@gmail.com',
//     age:36
// }).then(()=>{console.log('documnet Created!')})

// READ

// User.find({name:'ajay'})
//     .then((data)=>{console.log(data)});

// User.findOne({age:25})
//    .then((data)=>{console.log(data)});

//UPDATE

// User.updateOne({name:'ajay'},{email:'ajay@yahoo.com'})
//     .then((data)=>{console.log(data)});

// User.updateOne({name:'rahul'},{email:'rahul@yahoo.com'})
//     .then((data)=>{console.log(data)});

// User.updateMany({name:'rahul'},{email:'rahul@yahoo.com'})
//     .then((data)=>{console.log(data)});

User.updateMany({},{age:70})
    .then((data)=>{console.log(data)});