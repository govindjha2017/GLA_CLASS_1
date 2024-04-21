module.exports.islogedIn = (req,res,next)=>{
    if(req.user){
        console.log(req.user)
         next()
    }
    else{
        req.flash('success','Please Login!')
        res.redirect('/login')
    }
}

module.exports.isSeller = (req,res,next)=>{
    if(req.user.role=='seller'){
        next();
    }
    else{
        req.flash('success','You have Not access')
        res.redirect('/products')
    }
}