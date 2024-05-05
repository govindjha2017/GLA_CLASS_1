import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import Person from './person';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
     {/* <App></App>
     <App/> */}
     {App()}

    {Person({name:'rahul',age:25})}
    {Person({name:'ajay',age:55})}
    {Person({name:'govind',age:200})}
 
   </>
);


 