const url ='http://universities.hipolabs.com/search?country=United+States';

fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data[0]);
        const name = document.querySelector('.name');
        const web = document.querySelector('.web');
        for(let d of data){
            const p1= document.createElement('p');
            p1.innerHTML= d.name;
            name.appendChild(p1);

            const p2 = document.createElement('p');
            p2.innerHTML=d.web_pages[0];
            web.appendChild(p2)
        }
    })