const express = require('express');
const app = express();

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

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

app.get('/users/:id/edit',(req,res)=>{
    const {id}= req.params;
    let user = users.find((item)=> item.id==id);
     res.render('edit',{user});
})

app.post('/user/:id/edit',(req,res)=>{
    const {username,password,city} = req.body;

})

app.patch('/user/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=> item.id==id);
    const {username,password,city}= req.body;
    user.username=username;
    user.password=password;
    user.city=city;

    res.redirect('/users');
})

app.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=> item.id==id);

    let ind = users.indexOf(user);
    users.splice(ind,1);
    res.redirect('/users');
})

app.listen(4000);