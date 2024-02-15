const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    rating:Number,
    image:String
});

const Product = mongoose.model('Product',productSchema);

module.exports= Product;