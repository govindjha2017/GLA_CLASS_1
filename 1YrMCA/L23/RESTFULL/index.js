const express = require('express');
const app = express();

app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

const users = require('./data/user');

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/users',(req,res)=>{
    res.render('index',{users});
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const {username,password,city} = req.body;
    let x = users[users.length-1].id;
    const y = {
        id:x+1,
        username,password,city
    }
    users.push(y);
   res.redirect('/users')
})

app.get('/users/:id/edit',(req,res)=>{
    // console.log(req.params);
    // let id = req.params.id
    let {id} = req.params;
    let user = users.find((item)=> item.id==id)
    console.log(user);
    res.render('edit',{user})
})

const port = 5000;
app.listen(port,()=>{
    console.log('server up at port ',port)
})
