const url ='https://official-joke-api.appspot.com/random_joke';

fetch(url)
    .then((res)=>{
       return res.json();
    })
    .then((data)=>{
        console.log(data.setup);
        console.log(data.punchline)
        let setup = document.querySelector('#setup');
        setup.innerHTML=data.setup;

        let pucnchline = document.querySelector('#pucnchline');
        setTimeout(()=>{
            pucnchline.innerHTML = data.punchline
        },5000)
    })