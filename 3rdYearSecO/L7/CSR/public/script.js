
fetch('http://localhost:5000/todos')
    .then((res)=>{
        return res.json();
    })
    .then((datas)=>{
            console.log(datas);
            const parent = document.querySelector('#todos')

            for(let data of datas.todos){
                const p = document.createElement('p');
                p.innerHTML=data;
                parent.appendChild(p);

            }
    })