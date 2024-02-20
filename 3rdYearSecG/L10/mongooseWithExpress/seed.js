const mongoose = require('mongoose');
const Product = require('./model/product');

mongoose.connect('mongodb://127.0.0.1:27017/app-G')
    .then(()=>{console.log('DB conected')});

Product.create({
    name:'Laptop',
    price: 200,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: ' a personal computer that can be easily moved and used in a variety of locations'
})