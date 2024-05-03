import { useState } from "react";


let Counter = ()=>{  

    let [count, setCounter] = useState(15);
function increment(){
    setCounter(count+1)
 }
    return (
        <>
        <h1>Counter {count}</h1>

        <button onClick={increment}> click</button>
        </>
    )
}



export default Counter;