const {productSchema}  = require('../joivalidation')

module.exports.validateProduct =async (req,res,next)=>{
    const {name,price,image,desc} = req.body;
    try {
        const value = await productSchema.validateAsync({name,price,image,desc});
        next()
    }
    catch (error) { 
        console.log(error.message);
        res.render('error',{err:error.message})
    }
}