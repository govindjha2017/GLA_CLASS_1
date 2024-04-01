const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser('abc123535'))

app.get('/',(req,res)=>{
    res.send('working fine')
})

// app.get('/buy-product',(req,res)=>{
//     let totalPrice = 10000;
//     // console.log(req.cookies)
//     const {discount} = req.cookies
//     if(discount){
//         totalPrice-=discount;
//     }
//     res.send(`Total price = ${totalPrice}`)
// })

// app.get('/store',(req,res)=>{
//     res.cookie('discount','2000');
//     res.cookie('mode','drak')
//     res.send('Discount availed!')
// })

app.get('/buy-product',(req,res)=>{
    let totalPrice = 10000;
    console.log(req.signedCookies)
    const {discount} = req.signedCookies
    if(discount){
        totalPrice-=discount;
    }
    res.send(`Total price = ${totalPrice}`)
})

app.get('/store',(req,res)=>{
    res.cookie('discount','3000',{signed:true});
    res.cookie('mode','drak')
    res.send('Discount availed!')
})

app.listen(4000,()=>{
    console.log('server up at port 4000')
})