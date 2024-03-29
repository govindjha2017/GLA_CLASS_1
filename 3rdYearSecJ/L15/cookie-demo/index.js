const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser('abc123'))

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/set-cookie',(req,res)=>{
    res.cookie('mode','light')
    res.cookie('x','45')
    res.send('cookie set')
})

app.get('/get-cookie',(req,res)=>{
    console.log(req.cookies)
    res.send('ok')
})

// app.get('/discount',(req,res)=>{
//     res.cookie('discount','2000');
//     res.send('Discount Avalied!')
// })

// app.get('/store',(req,res)=>{
//     let price = 10000;
//     if(req.cookies.discount){
//         price = price - req.cookies.discount;
//     }
//     res.send(`product price = ${price}`)
// })

app.get('/discount',(req,res)=>{
    res.cookie('discount','3000',{signed:true});
    res.send('Discount Avalied!')
})

app.get('/store',(req,res)=>{
    console.log(req.signedCookies)
    let price = 10000;
    if(req.signedCookies.discount){
        price = price - req.signedCookies.discount;
    }
    res.send(`product price = ${price}`)
})

app.listen(4000,()=>{
    console.log('server start at port 4000');
})