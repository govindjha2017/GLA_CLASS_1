import React from 'react';
import ReactDOM from 'react-dom/client';
 
import Card from './card' 

const root = ReactDOM.createRoot(document.getElementById('root'));
 let x = 'govind'
root.render(
  <>
  <h1>hello ji</h1>
  <div>
    <p> from paragraph tag</p>
      {Card(x)}
  </div>
  </>
  
)

 