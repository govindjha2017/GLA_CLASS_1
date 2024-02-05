function outer(){
    let a = 10;
    function inner(){
        let x = 40;
        console.log(x);
        console.log(a);
    }
    return inner;
}


let x = outer()
console.log(x);
x();