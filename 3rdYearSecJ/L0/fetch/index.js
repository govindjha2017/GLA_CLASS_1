const url = 'https://official-joke-api.appspot.com/random_joke';

fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
         console.log(data);
         const setup = document.querySelector('#setup');
         setup.innerHTML=data.setup;

         const punchline = document.querySelector('#punchline');
         setTimeout(()=>{
            punchline.innerHTML=data.punchline
         },5000)
         
    })