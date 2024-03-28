const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser('some_secret_1234'))

app.get('/',(req,res)=>{
    res.send('Working fine')
})

app.get('/set-cookie',(req,res)=>{
    res.cookie('mode','light');
    res.cookie('x','45')
    res.send('ok')
})

// app.get('/discount',(req,res)=>{
//     res.cookie('discoount','2000')
//     res.send('discount availed')
// })

// app.get('/buy',(req,res)=>{
//     let totalPrice = 10000;
//     console.log(req.cookies);
//     const {discoount} = req.cookies;
//     if(discoount){
//         totalPrice = totalPrice-discoount;
//     }
//     res.send(`total price = ${totalPrice}`)
// })


app.get('/discount',(req,res)=>{
    res.cookie('discoount','2000',{signed:true})
    res.send('discount availed')
})

app.get('/buy',(req,res)=>{
    let totalPrice = 10000;
    console.log(req.signedCookies);
    const {discoount} = req.signedCookies;
    if(discoount){
        totalPrice = totalPrice-discoount;
    }
    res.send(`total price = ${totalPrice}`)
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT)
})