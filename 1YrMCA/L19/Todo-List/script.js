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
    <span class="down-arrow">↓</span>
</div>`

const todo = document.createElement('div');
todo.innerHTML=str;
todo.classList.add('todo')
const parent = document.querySelector('.sec-B');
parent.appendChild(todo);

inp.value='';
})


const SecB = document.querySelector('.sec-B');

SecB.addEventListener('click',(e)=>{
       console.log(e.target.getAttribute('class'));

       if(e.target.getAttribute('class')=='checkbox'){
        e.target.nextElementSibling.classList.toggle('test');
       }
       else if(e.target.getAttribute('class')=='bin'){
        e.target.parentElement.parentElement.remove();
       }
       else if(e.target.getAttribute('class')=='up-arrow'){
           let currTask = e.target.parentElement.parentElement;
           let prevtask =currTask.previousElementSibling;
           if(prevtask){
            currTask.after(prevtask)
           }
       }
       else if(e.target.getAttribute('class')=='down-arrow'){
        let currTask = e.target.parentElement.parentElement;
        let nextTask =currTask.nextElementSibling;
        if(nextTask){
            currTask.before(nextTask)
        }
    }
})
