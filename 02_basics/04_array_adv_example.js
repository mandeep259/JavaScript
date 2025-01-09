const fruits = ['banana', 'apple', 'orange']
const number = [1,2,3,4,5]
const anotherArray = [11,12,13,[14,15],[16,17,[18,19]]]

const arrayObject = new Array ('Candy', 'choclate');
console.log(arrayObject);
console.log(typeof arrayObject);


console.log(Array.isArray('telmune'));
console.log(Array.from('telmune'));


let mixedValues = (fruits.concat(number)) //concat method don't modfy the existing array but returns a new array
console.log(mixedValues[2]);


// let mixedValuesUsingSpreadMethod = [...fruits, ...number, ...anotherArray] //spread method
// console.log(mixedValuesUsingSpreadMethod);

let mixedValuesUsingFlatMethod = anotherArray.flat(Infinity)
console.log(mixedValuesUsingFlatMethod);



//suppose the value are in a variable form, How can convrt it to the Array object.

let score1 = 100
let score2 = 200
let score3 = 300

let allScore = Array.of(score1,score2,score3)

console.log(allScore);

console.log(allScore.indexOf(300));

// console.log(allScore(Array.indexOf(300)))
