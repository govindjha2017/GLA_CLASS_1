const conatiner = document.createElement('div');
conatiner.classList.add('container');

const body = document.querySelector('body');
body.appendChild(conatiner);

for(let i =0;i<10;i++){
    const row = document.createElement('div');
    for(let j =0; j<10;j++){
        const cell = document.createElement('div');
        row.appendChild(cell);
        let val =(i)*10+j+1;
        cell.innerText= (i)*10+j+1;
        cell.setAttribute('id',val)
        cell.style.height ='9vh';
        cell.style.width='9vw';
        cell.style.border='1px solid black'
        if((val+i)%2!=0){
            cell.style.backgroundColor='black';
            cell.style.color='white'
        }
    }
    row.style.display='flex'
    conatiner.appendChild(row)
}

const el = document.createElement('div');
el.style.backgroundColor='red';
el.style.height='50%';
el.style.width='50%';

let temp =1
let check =  document.getElementById(temp);
// console.log(check);
check.appendChild(el);

const dice = document.querySelector('button');
dice.addEventListener('click',()=>{
    let y = Math.ceil(Math.random()*6);
    const result = document.querySelector('.result');
    result.innerText= y;
    if(temp+y<=100){
    
        temp = temp+y;
        if(temp==100){
            window.alert('YOU WON')
        }
        let cell = document.getElementById(temp);
        cell.appendChild(el);
    }
   
})