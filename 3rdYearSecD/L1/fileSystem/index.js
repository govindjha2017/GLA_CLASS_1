const fs = require('fs');
const path = require('path');
const loc = path.join(__dirname,'data2','hello.txt');
// const data ="this is temp string data hello ji";
// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('filwe written sucesfully');
//     }
   
// })

fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
    // console.log(data.toString());
    console.log(data);
})

// console.log(__dirname);