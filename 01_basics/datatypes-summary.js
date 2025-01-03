// categories 2 types of Datatypes
// Primitive 2. Non Primitive

// Primitive (call by values):- 7 types- Number, String, BigInt, Boolean, Null, Undefined, Symbol
// Non Primitive (Refference type) - Array, Object, Functions
//  JS is dynamically language

const score = 100
const sccoreValue =100.3

const isLoggedIn= false
const outsideTemp = null
let username;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigNumber = 89451541548545158n

console.log(typeof bigNumber);

// Array, Object, Functions

let heros = ["Shaktiman", "Krish", "He-Man", "Naagraj"]
console.log(typeof heros);

let myObj = {
    name: "Deep",
    age: 36,
    state: "PB"
}

// console.log(myObj);
console.log(typeof myObj);

let myFuntion = function(){
    console.log("Hello world");
    }

console.log(typeof(myFuntion)); // it is called as funtion object

/*
Stack and Heap memory- Stack memory is used by (Primitive Datatypes) and Heap memory is used by 
the (Non-Primitive Datatypes)
*/

let userEmail = "deep@google.com"
userAnotherEmail = userEmail

console.log(userEmail);
console.log(userAnotherEmail);

userAnotherEmail = "deep@yahoo.com" //now the emailID is changed, let see? is it changed the original value

console.log(userEmail);
console.log(userAnotherEmail);
//for heap

let userOne = {
    state: "PB",
    location: "Mohali"
}  

let userTwo = userOne

// console.log(userOne.state);
// console.log(userTwo.state);

userTwo.state = "Bangleru"

console.log(userOne.state);
console.log(userTwo.state);




//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3