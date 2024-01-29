const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));  // req.body undefined

const users = require('./data/user')

app.get('/users',(req,res)=>{
    res.render('users',{users})
})
app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const {username, password,city}=req.body;
    let user = {
        id:users.length+1,
        username,password,city,
     
    }
    users.push(user);

   res.redirect('/users')
})

app.get('/users/:id',(req,res)=>{
    // console.log(req.params);
    // const id = req.params.id;
    const {id}=req.params;
    let user = users.find((item)=> item.id==id);
     
    res.render('show',{user});
})

app.listen(4000);