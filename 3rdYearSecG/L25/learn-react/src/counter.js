


let Counter = ()=>{
    // let count =10;

    let increment = ()=>{
        console.log('clicked');
        count++;
        console.log(count)
    }
    return(
        <>
        <h1>counter = {count}</h1>
        <button onClick={increment} >increment</button>
        </>
    )

}

export default Counter