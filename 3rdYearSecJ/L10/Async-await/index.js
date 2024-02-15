let pr = new Promise((resolve, reject) => {
   setTimeout(()=>{
       resolve('promise resolved data')
   },5000) 
})


// pr
//     .then((data)=>{console.log(data)})

async function fetchData(){
    let x = await pr
    console.log(x);
}

fetchData()