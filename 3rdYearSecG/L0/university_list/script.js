const url ='http://universities.hipolabs.com/search?country=United+States';

fetch(url)
    .then((res)=>{
          return res.json();
    })
    .then((data)=>{
        console.log(data[0].web_pages[0]);
        const main = document.querySelector('#main');
        for(let d of data){
            const div = document.createElement('div');
            div.innerHTML= d.name;
            main.appendChild(div);
        }
    })