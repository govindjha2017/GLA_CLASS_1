const head = document.getElementById('head');
// head.style.color='red'
// head.innerHTML='Nhi sikhna hai'
console.log(head);

const p = document.getElementsByTagName('p');
console.log(p);
p[2].style.border='3px solid green'


const para = document.getElementsByClassName('para');
console.log(para);

const x = document.querySelector('p');
console.log(x);

const favMovie = document.querySelectorAll('.fav-movie');

for(let movie of favMovie){
    movie.style.color='blue'
}

const a = document.querySelectorAll('p')[2];

a.style.padding='15px'
a.innerHTML='<h1>kuchh bhi</h1>';
console.log(a);

a.setAttribute('class','one')

//SetAttribute getAttribute removeAttribute

const img = document.querySelector('img');
img.style.height='250px'
img.setAttribute('id','image');

img.setAttribute('src','https://images.unsplash.com/photo-1707524511843-e90efd73e053?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

console.log(img.getAttribute('id'));

const paragraph = document.querySelector('#lastpara');
paragraph.setAttribute('class','lastpara1');
paragraph.setAttribute('class','lastpara2 lastpara1')

paragraph.removeAttribute('class');

