const fs = require('fs');
const path = require('path');

const loc = path.join(__dirname,'data2','hello.txt')
// console.log(__dirname);
const data = 'this is temp string data in hello file';

// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File written sucessfullly');
//     }
// })

fs.readFile(loc,(err,data)=>{
    console.log(data.toString());
})