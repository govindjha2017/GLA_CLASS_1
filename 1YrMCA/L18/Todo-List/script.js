const btn= document.querySelector('#btn');
const inp = document.querySelector('#inp');

btn.addEventListener('click',()=>{

    const str = `<div class="list">
    <input class="checkbox" type="checkbox">
    <p>${inp.value}</p>
</div>
<div class="btn">
    <span class="up-arrow">↑</span>
    <span class="bin">🗑</span>
    <span class="down-aroow">↓</span>
</div>`

const todo = document.createElement('div');
todo.innerHTML=str;
todo.classList.add('todo')
const parent = document.querySelector('.sec-B');
parent.appendChild(todo);

inp.value='';
})

const checkbox = document.querySelectorAll('.checkbox');

for(let box of checkbox){
    box.addEventListener('click',(e)=>{
        console.log(e.target)
        e.target.nextElementSibling.classList.toggle('test');
    })
}
