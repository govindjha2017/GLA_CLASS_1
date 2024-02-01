var money = 50;

function outer(){
    console.log(a);
    var a=10;
    console.log(a);
    console.log(money);
}


console.log(money);
// console.log(a);

outer();