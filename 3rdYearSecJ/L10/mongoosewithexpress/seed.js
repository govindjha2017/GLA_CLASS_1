const mongoose = require('mongoose');
const Product = require('./model/product');


mongoose.connect('mongodb://127.0.0.1:27017/restfull-J')
    .then(()=>{console.log('db conected')})
    .catch(()=>{console.log('DB not conected')})

Product.create({
    name:'Laptop',
    price:200,
    desc: 'A laptop is a personal computer that can be easily moved and used in a variety of locations.',
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})