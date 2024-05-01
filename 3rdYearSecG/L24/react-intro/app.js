// const para = document.createElement('p');
// para.innerText='Hii'
// console.log(para);

// const div = document.getElementById('root');

// console.log(div);

// div.innerHTML ='';

// div.appendChild(para)

const head = React.createElement('p',{},'hii');

// console.log(head)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(head)