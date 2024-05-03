import React from "react";
import { useState } from "react";


function Counter(){
     let [count , setCount] = useState(10)
    function increment() {
         setCount(count+1)
         console.log(count)
    }
    
    return (
        <>
        <h1>count = {count}</h1>
        <button onClick={increment}>increament</button>
        </>

    )
}

export default Counter