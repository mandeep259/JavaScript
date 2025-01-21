let a = 10;
var b =20;
const c =30;

// console.log(a);
// console.log(b);
// console.log(c);

function scope (){

    let a =100;
    console.log(a);
    
}

scope()

console.log(a);
console.log(b);
console.log(c);