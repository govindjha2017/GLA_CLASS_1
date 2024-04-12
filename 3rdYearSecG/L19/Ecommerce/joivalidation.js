const Joi = require('joi');

module.exports.productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().required(),
    desc: Joi.string().required(),
})
