function outer(){
    let money = 50;
    function inner(){
        money++;
        a=10;
        console.log(money);
        console.log(a);
    }
    return inner;
}

let fun1 = outer();
let fun2 = outer();
fun1();
fun1();
fun2();
fun1();