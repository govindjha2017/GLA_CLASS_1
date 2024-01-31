const express = require('express');
const app = express();

const methodOverride = require('method-override')
app.use(methodOverride('_method'))
const users = require('./data/user');
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/users',(req,res)=>{
    res.render('users',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    const {username,password,city}= req.body;
    let user ={
        id:users.length+1,
        username,password,city
    }
    users.push(user);
    res.redirect('/users')
})
app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=>item.id==id);
    // console.log(user);
    res.render('show',{user});
})

app.get('/users/:id/edit',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=>item.id==id);
    res.render('edit',{user});
})

app.patch('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=>item.id==id);
    const {username,password,city}=req.body;
    user.username=username;
    user.password=password;
    user.city=city;

    res.redirect('/users');
})
app.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=>item.id==id);
    let ind = users.indexOf(user);
    users.splice(ind,1);
    res.redirect('/users');
})
app.listen(4000);