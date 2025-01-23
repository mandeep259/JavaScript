// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

//falsy vlaue
// false, 0, -0 ,Bigint,0n, "", null, undefined, Nan

//truthy values

// " ", [], {}, function (){}, "0", "false"

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("The object is empty");    
// }

// Nullish Coalescing Operator (??): null undefined

let val1;

console.log(val1);

val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 20
console.log(val1);

val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
