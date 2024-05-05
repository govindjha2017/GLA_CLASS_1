import React, { useState } from "react";

let Counter = ()=>{
    // let x = 10;
    let [x,setX] = React.useState(10)

    let increment = ()=>{
         
        console.log('clicked!');
        console.log(x)
    }
    return(
        <>
           <h3>count ={x}</h3>
           <button onClick={increment} >Increment</button>
        </>
    )
}

export default Counter;