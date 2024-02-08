
function refresh(){
    fetch('http://localhost:5000/todos')
    .then((res)=>{
        return res.json();
    })
    .then((datas)=>{
        console.log(datas.todos);
        const parent = document.querySelector('#todo');
        parent.innerHTML='';
        for(let data of datas.todos){
            let p = document.createElement('p');
            p.innerHTML=data;
            parent.appendChild(p);
        }
    })
}

refresh();

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inp = document.querySelector('input');
    let obj = {
        'title':'todo',
        'value': inp.value
    }
    inp.value=''
    fetch('/todos',{
        method:'post',
        body: JSON.stringify(obj),
        headers:{
            'content-Type':'application/json'
        }
    })
    .then((res)=>{
        return res.json();
    })
    .then((x)=>{
        console.log(x);
        refresh();
    })
})