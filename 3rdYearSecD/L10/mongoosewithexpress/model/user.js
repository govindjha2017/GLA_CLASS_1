const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
})