const express = require('express');
const app = express();
const users = require('./data/user');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('working fine');
})

app.get('/users',(req,res)=>{
    res.render('users',{users});
})
app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    // console.log(req.body);
    const {username, password , city} = req.body;
    const user ={
        id:users.length+1,
        username,password,city,
    }
    users.push(user);

    res.redirect('/users')
})

app.get('/user/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=> user.id==id);
    // console.log(user);
    res.render('show',{user})
})

app.get('/user/:id/edit',(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=> user.id==id);

    res.render('edit',{user})
})

app.patch('/users/:id',(req,res)=>{
    const {username, password , city} = req.body;
    const {id} = req.params;
    const user = users.find((user)=> user.id==id);
    user.username=username;
    user.password=password;
    user.city=city;
    res.redirect('/users')
})
app.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=> user.id==id);
   let ind = users.indexOf(user);
   users.splice(ind,1);
   res.redirect('/users');
})
app.listen(4000,()=>{
   console.log('server up at port',4000);
   
})