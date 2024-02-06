

fetch('http://localhost:5000/todos')
    .then((res)=>{
        return res.json();
    })
    .then((datas)=>{
        console.log(datas.todos);
        const parent = document.querySelector('#todo');
          
        for(let data of datas.todos){
            let p = document.createElement('p');
            p.innerHTML=data;
            parent.appendChild(p);
        }
    })