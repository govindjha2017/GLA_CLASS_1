var money = 50;

function outer(){
    var a=10;
    function inner(){
        var p =10;
        a++;
        p++;
        function innnermost(){
           console.log(a);
           console.log(p);
        }
        innnermost();
    }
    inner();
}

var x=11;
console.log(x);