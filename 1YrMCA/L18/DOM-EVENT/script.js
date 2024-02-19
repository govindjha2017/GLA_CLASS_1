const head = document.querySelector('h1');
// head.addEventListener('click',(e)=>{
//         // console.log('clicked')
//         console.log(e.target);
// })

const para = document.querySelectorAll('p')[1];

head.addEventListener('copy',(e)=>{
    e.target.innerText = "";
    window.alert('Cheating karta hai')
})

para.addEventListener('mouseenter',(e)=>{
    e.target.style.color='blue';
})

para.addEventListener('mouseleave',(e)=>{
    e.target.style.color='black';
})