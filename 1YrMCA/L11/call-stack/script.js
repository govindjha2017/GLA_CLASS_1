
var a=10;
function outer(){
    var p = 40;

    function inner(){
        console.log(a);
        console.log(p);
    }
    inner()
}

outer();