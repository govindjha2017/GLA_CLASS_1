const fs = require('fs');
const path = require('path');

const loc = path.join(__dirname,'data','hello.txt');

const data ='this is temp string data';

fs.writeFile(loc,data,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('file writeen succesfully');
})

// fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
    
//     console.log(data);
// })