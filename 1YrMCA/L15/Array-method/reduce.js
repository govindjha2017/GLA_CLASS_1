
// let arr = [10,24,56,78,43];
// let reduceVal = arr.reduce((acc,item,ind,arr)=>{
//     // console.log(acc)
//     return 5;
// })
// console.log(reduceVal);

let arr = [10,24,56,78,43];

let val = arr.reduce((acc,item,ind)=>{
    //   console.log(ind);
    console.log(acc);
    return ind*2
},55)