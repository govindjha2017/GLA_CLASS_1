const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('abc123'));

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/set-cookie',(req,res)=>{
    res.cookie('pincode','809223');
    res.cookie('mode','dark')
    res.send('cookie set')
})
app.get('/get-cookie',(req,res)=>{
    console.log(  req.cookies);
    res.send('ok')
})

// app.get('/store',(req,res)=>{
//      res.cookie('discount','2000');
//      res.send('discount availed!')
// })
// app.get('/buy-product',(req,res)=>{
//     let totalPrice = 10000;
//     if(req.cookies.discount){
//         totalPrice = totalPrice - req.cookies.discount
//     }
//     res.send(`Total price = ${totalPrice}`)
// })

app.get('/store',(req,res)=>{
    res.cookie('discount','2000',{signed:true});
    res.send('discount availed!')
})
app.get('/buy-product',(req,res)=>{
   let totalPrice = 10000;
   console.log(req.signedCookies)
   if(req.signedCookies.discount){
       totalPrice = totalPrice - req.signedCookies.discount
   }
   res.send(`Total price = ${totalPrice}`)
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})