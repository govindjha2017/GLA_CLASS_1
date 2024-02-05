function outerFun(){
    let money = 150;
    function innerFun(){
        money++;
        let a = 10;
        function innerMostFun(){
            money++;
            a++;
            console.log('money: ', money, 'a: ', a);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun = outerFun();
let x = outerFun();
let fun1 = fun();
let fun2 = x();

fun1();
fun1();
fun1()
fun2();
fun2();
fun1();