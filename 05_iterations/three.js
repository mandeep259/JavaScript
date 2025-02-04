// for of   

// let myArr =[ 1,2,3,4,5,6,7,8,9,10]

// myArr.forEach( (item) => (console.log(myArr[item])) )


const arr = [1, 2, 3, 4, 5]

for (const item of arr) {
    // console.log(item);
    
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);


//object is not iterables in for of 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     // console.log(key, ':-', value);
    
// }

for (const key in myObject) {
     console.log([key]);
}