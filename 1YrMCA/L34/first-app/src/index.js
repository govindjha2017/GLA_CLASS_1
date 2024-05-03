import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import Card from './card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <h1>Hello</h1>
    <App></App>
    <App/>
    {App()}
    {console.log('hello')}
    {Card({name:'govind',age:40})}
    {Card({name:'ajay',age:44})}
    {Card({name:'rahul',age:48})}
 </>
    
);
 

