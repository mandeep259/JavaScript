// let a = 10;
// const b = 20;
var c = 300; //"var" is not used in the modern JS due to its block and funtion as it behave as inappropriate behave

// console.log(a);
// console.log(b);
// console.log(c);


function myfunc (){
    let a = 10;
    const b = 20;
    var c = 30;

    console.log("INNER", a);
    console.log("INNER", b);
    console.log("INNER", c);
}
myfunc()
// console.log(a);
// console.log(b);
console.log(c);
