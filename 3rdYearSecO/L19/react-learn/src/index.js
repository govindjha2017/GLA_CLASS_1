import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import card from './card';
import Counter from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <>
        <h1>hello ji</h1>
        <App/>
        {/* <App></App> */}
         

         {card({'name':'govind','age':45})}
         {/* {card()}
         {card()} */}
        
    </>
 
);
