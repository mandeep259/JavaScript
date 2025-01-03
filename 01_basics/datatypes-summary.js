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