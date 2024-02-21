// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');
// const abc = document.querySelector('.abc');

// abc.addEventListener('click',()=>{
//     console.log('abc div clicked')
// })

// child.addEventListener('click',()=>{
//     console.log('child div clicked')
// })
// parent.addEventListener('click',()=>{
//     console.log('parent div clicked')
// })

const container = document.querySelector('.container');
container.addEventListener('click',(e)=>{
    console.log(e.target);
})