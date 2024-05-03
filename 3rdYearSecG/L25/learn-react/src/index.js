import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import Card from './card';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <>
     <App></App>
     <App/>

     <h1>j</h1>

     {App()}

     {Card({name:'govind','age':40})}
     {Card({name:'ajay','age':45})}
     {Card({name:'rahul','age':43})}

    </>
     
 );

 