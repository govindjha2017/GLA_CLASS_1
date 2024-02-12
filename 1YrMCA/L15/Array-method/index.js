let arr = [10,24,56,78,43];

let mapArr = arr.map((item,ind,x)=>{
    //  console.log(item);
    // console.log(x)
    x[ind]=5
     return item*2;
})
console.log(arr);
// console.log(mapArr)
 