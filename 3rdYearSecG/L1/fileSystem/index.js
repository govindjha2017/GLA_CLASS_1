const fs = require('fs');
const path = require('path');

const loc = path.join(__dirname,'data','hello.txt');

// console.log(dirname);
const data = "this is temp string data hello from index.js";
// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('file written sucessfully');
//     }
// })

fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
    // console.log(data.toString());
    console.log(data);
})