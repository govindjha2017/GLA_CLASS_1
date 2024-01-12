const inp = document.querySelector('#inp')
const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    const name = document.querySelector('.name');
    const web = document.querySelector('.web');
    name.innerHTML='';
    web.innerHTML=''
    const url = `http://universities.hipolabs.com/search?country=${inp.value}`;
    console.log(url);
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data[0].web_pages[0]);
    
        for(let d of data){
            const p1 = document.createElement('p');
            p1.innerHTML=d.name;
            name.appendChild(p1);

            const p2 = document.createElement('p');
            p2.innerHTML= d.web_pages[0]
            web.appendChild(p2)
        }
    })
    inp.value=''
})

