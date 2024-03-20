const {productSchema} = require('../joiValidation')

module.exports.validateProduct = async (req,res,next)=>{
    const {name,image,price,desc} = req.body;
    try {
        const value = await productSchema.validateAsync({name,image,price,desc});
        next();
    }
    catch (error) { 
         console.log(error.message);
        //  res.send('ok')
        res.render('error',{err:error.message})
    }
}