// async function fun(){
//     let x = "inside fun";
//     return x;
// }

// let y = fun();

// console.log(y);


async function abc(){
    let pr1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve('promise1 resolved data');
        },5000)
    })
    return pr1;
}

// let a = abc();
// console.log(a);

let pr2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
       resolve('promise2 resolved data');
    },10000)
})

async function fetchData(){
    let y = await pr2;
    console.log(y);
}
fetchData();