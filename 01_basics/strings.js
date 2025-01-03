let userName = "Deep Singh"
let age = 36

console.log("My name is " + userName + " and my age is " + age); //old method
//modern sys=ntax
console.log(`My name is ${userName} and my age is ${age}`);

console.log(`My name is ${userName} and its length of the charactor is ${userName.length}`);
console.log(userName.toUpperCase());
console.log(userName.indexOf("i"));
console.log(userName.charAt('6'));

let gameName = "contra the Awesome Game  " //whitesapace added to check the trim method
console.log(gameName.includes("zebra"));

console.log(gameName);
console.log(gameName[4]);

console.log(gameName.trim());
console.log(gameName.slice());

const newGameName = gameName.substring(0, 3)
console.log(newGameName);

console.log(newGameName.slice(-1, 3));

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('sunder'));

console.log(gameName);

console.log(gameName.split(' '));













