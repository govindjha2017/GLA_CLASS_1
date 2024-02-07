let pr = new Promise((resolve, reject) => {
    let data = 'this is our promise data';
    let err = 'error '
    setTimeout(()=>{
        reject(err);
        // resolve(data);
    },5000)
})

// console.log(pr);

pr
    .then((x)=>{
        console.log(x);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log('end');