let arr = [10,24,56,78,43];

let filterArr = arr.filter((item,ind,arr)=>{
      if(item>30 && item%2==0){
        return true;
      }
})

console.log(filterArr);