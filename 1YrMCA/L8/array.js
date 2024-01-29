var arr = [3,7,8,9,"hello"];

var a = arr[3];
// console.log(a);

var size = arr.length;
// console.log(size);

// console.log(arr);

// arr.push(6);
// arr.pop();
// arr.pop();

// arr.shift()
// arr.unshift(45);

arr.splice(2,3,14,5,6,7);

// console.log(arr);


var arr1 = [45,76,98,2,78,"javascript","kuchh bhi",45];
 
// for(var i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
//     if(i==6){
//         arr1[i]="hello"
//     }

// }
// for of loop
for(var item of arr1){
    console.log(item);
}

console.log(arr1);

var a = [3,4,7,9];
var b = [67,87,56];

var c = a.concat(b);
console.log(c);