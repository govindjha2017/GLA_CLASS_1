const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sec-G')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')})

const userSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    age:Number
})

const User = mongoose.model('User',userSchema);

// create

User.create({
    name:'ajay',
    password:'ajay@123',
    email:'ajay@gmail.com',
    age:24
}).then(()=>{console.log('documnet created!!')})