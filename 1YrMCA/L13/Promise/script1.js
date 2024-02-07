function kalMilneAayega(x){
  let pr = new Promise((resolve, reject) => {
       setTimeout(()=>{
          if(x){
            resolve('to main tujhe party dunga!')
          }
          else{
            reject('wo milne nhi aaya to party kise du!!')
          }
       },3000);
  })

  return pr;
}

kalMilneAayega(!false)
    .then((x)=>{
         console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })