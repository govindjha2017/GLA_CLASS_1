const joi = require('joi');

module.exports.productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required().min(0),
    image: joi.string().required(),
    desc: joi.string().required(),
});

