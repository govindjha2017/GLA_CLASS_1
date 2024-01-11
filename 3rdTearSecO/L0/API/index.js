const url ='https://official-joke-api.appspot.com/random_joke';

const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    fetch(url)
    .then((res)=>{
        // console.log(res);
        return res.json()
    })
    .then((data)=>{
            console.log(data.punchline);
            let setup = document.querySelector('#setup');
            setup.innerHTML=data.setup;
            setTimeout(()=>{
               let punchline = document.querySelector('#punchline');
               punchline.innerHTML=data.punchline;
            },5000)
    })
})



