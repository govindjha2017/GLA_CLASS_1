const Joi = require('joi')

module.exports.productSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required().min(0),
    desc: Joi.string().required()
})

