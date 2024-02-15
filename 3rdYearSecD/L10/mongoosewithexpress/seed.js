const mongoose = require('mongoose');
const Product = require('./model/product')

mongoose.connect('mongodb://127.0.0.1:27017/app-D')
    .then(()=>{console.log('DB conected')})
    .catch(()=>{console.log('DB not conected')})

Product.create({
    name:'Laptop',
    price:200,
    rating:4.1,
    image:'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
})