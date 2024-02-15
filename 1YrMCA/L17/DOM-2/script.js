const para = document.querySelectorAll('p')[1];

// para.setAttribute('class','one')
// para.setAttribute('class','one two')

para.classList.add('one');
para.classList.add('two');

para.classList.remove('one')
console.log(para.classList.contains('two'));

para.classList.toggle('two');
para.classList.toggle('two');
para.classList.toggle('two');

const city = document.querySelectorAll('li')[3];
city.style.color='blue';

const div = city.parentElement.parentElement;
// console.log(div);

div.style.border='3px solid black';

city.previousElementSibling.previousElementSibling.style.color='green';

city.nextElementSibling.style.color='grey';

// console.log(div.children[1].children[2])

div.children[1].children[2].style.color='teal'

const p = document.createElement('p');
p.innerText="hello ji"
console.log(p);

const x = document.querySelector('div');
x.appendChild(p);
x.append("dwq");