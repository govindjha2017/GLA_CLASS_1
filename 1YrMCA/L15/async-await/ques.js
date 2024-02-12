let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
       resolve('promise resolved data')
    },5000)
})
console.log('start');
async function fun(){
    console.log('inside fun function')
    let y = await pr;
    console.log(y);
    console.log('hello');
}
fun();
console.log('end');