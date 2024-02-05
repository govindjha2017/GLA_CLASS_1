let arr = [{l:5,b:3},{l:2,b:4},{l:6,b:3},{l:1,b:7}];

let area = (l,b)=>{
   return l*b;
}

let parameter= (l,b)=>{
    return 2*(l+b);
}

function calculate(datas,logic){
    let finalData = [];
    for(let data of datas){
       let temp= logic(data.l,data.b);
       finalData.push(temp)
    }

    return finalData;
}

let result =calculate(arr,parameter);
console.log(result);