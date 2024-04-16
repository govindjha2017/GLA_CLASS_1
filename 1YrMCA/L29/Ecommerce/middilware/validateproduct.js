const {productSchema} = require('../joivalidation');

const validateProduct = async (req,res,next)=>{
    const {name,image,price,desc} = req.body;

    try {
        const value = await productSchema.validateAsync({name,image,price,desc});
        next()
    }
    catch (err) {
        res.render('error',{err:err.message})
     }
}

module.exports = validateProduct;