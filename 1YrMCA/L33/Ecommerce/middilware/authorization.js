module.exports.islogedIn = (req,res,next)=>{
     if(req.user){
        next();
     }
     else{
        req.flash('success','Please Login first')
        res.redirect('back')
     }
}

module.exports.isSeller = (req,res,next)=>{
    if(req.user.role=='Seller'){
        next();
    }
    else{
        req.flash('success','You are not authorized')
        res.redirect('back')
    }
}