const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('secret-key'));

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/set-cookie',(req,res)=>{
    res.cookie('x','105');
    res.cookie('mode','dark')
    res.send('cookie added!!')
})

app.get('/get-cookie',(req,res)=>{
    console.log(req.cookies);
    res.send('ok')
})

// app.get('/store',(req,res)=>{
//     res.cookie('discount','2000');
//     res.send('Discount availed!!')
// })

// app.get('/buy-product',(req,res)=>{
//     let totalPrice = 10000;
//     let discountPrice = req.cookies.discount;
//     if(discountPrice){
//         totalPrice -= discountPrice;
//     }
//     res.send(`total price = ${totalPrice}`)
// })

app.get('/store',(req,res)=>{
    res.cookie('discount','4000',{signed:true});
    res.send('Discount availed!!')
})

app.get('/buy-product',(req,res)=>{
    let totalPrice = 10000;
    let discountPrice = req.signedCookies.discount;
    if(discountPrice){
        totalPrice -= discountPrice;
    }
    console.log(req.signedCookies);
    res.send(`total price = ${totalPrice}`)
})


app.listen(4000,()=>{
    console.log('server runing at port 4000')
})