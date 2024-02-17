const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    name:String,
    price:Number,
    rating:Number,
    image:String,
    desc:String
});

const Product = mongoose.model('Product',productschema);

module.exports = Product;