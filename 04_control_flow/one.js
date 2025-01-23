
// const temperatue = 40

// if (temperatue >= 39) {
//     console.log("The temp is less than 50");
// } else {
//     console.log("The temp is greater than 40");
// }

// console.log("Executed");
// <, >, <=, >=, ==, !=, ===, !==

// let score = 200
// if (score > 100) {
//     console.log("The score is less than 200");
//     let power = "FLY"
//     console.log(`The user has power : ${power}`);
// }

// console.log(`The user has power : ${power}`)

const balance = 800
if (balance <=500) {
    console.log("The balance is less than or equel to 500");
} else if (balance < 750){
    console.log("The balance is less than 750");
} else if (balance < 950){
    console.log("The balance is less than 950");
} else {
    console.log(" The balance is greater than 950");
    
}

const userLoggedIn = true
const debitCard = true
//&& both condition true, if one of the condition not true, it gives the value as false.
if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
    
}

const loggedInFromGoogle = true
const loggedInFromEmail =false
// || one of the condition is true, the value in return as true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}
