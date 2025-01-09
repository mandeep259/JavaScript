const marvelHeros = ["ironman", 'spiderman', 'thor']
const dcHeros = ['flash', 'superman', 'he-man'] 

// allHeros = marvelHeros + dcHeros

// console.log(typeof allHeros); //it converts array into a string

// marvelHeros.push(dcHeros)
// console.log("Using push method ", marvelHeros );


let newHeros= marvelHeros.concat(dcHeros);
console.log(newHeros);

newF = [...marvelHeros, ... dcHeros]
console.log(newF);

console.log(newHeros.includes('spiderman'))
console.log(newHeros.includes('gentleman'))

console.log(Array.isArray(newHeros))
console.log(Array.from('mandeep'))
console.log(Array.from({name: 'Deep'})) //return as empty object


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))



let utkarsh = ["manish", "abhishek", {fullName: "Rahul"}]

console.log(utkarsh[2].fullName);

utkarsh[2].fullName = "manish"
console.log(utkarsh[2]["fullName"]);
