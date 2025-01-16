
// console.log("D");
// console.log("E");
// console.log("E");
// console.log("P");

// Function: function makes repeated tasks very easily.

// function sayMyName(){
//     console.log("D");
//     console.log("E");
//     console.log("E");
//     console.log("P");
// }

// sayMyName()

// function addTwoNumber(val1, val2) {
//     let result = val1 + val2
//     return result
// }

// // console.log(addTwoNumber(5,20))
// let TotalVal = addTwoNumber(5,35)
// console.log("Result", TotalVal);
// console.log(TotalVal);


// function addTwoNumber(val1, val2) {
//         return val1 + val2
// }

// console.log(addTwoNumber(5,"35a"))
    
// function addTwoNumber(val1, val2) {
//     if (typeof val1 === "number" && typeof val2 == "number") {
//         console.log("Both numbers are vaid, Proceeding for its SUM: ");
//         return val1 + val2
//     } 
//         return "Invalid Input. Please provide number values only"
// }

// console.log(addTwoNumber(5,"25"))
// console.log(addTwoNumber(5, null))
// console.log("The Sum of both Numbers :", addTwoNumber(5,25))



// function addTwoNumber(val1, val2) {
//     if (typeof val1 === "number" && typeof val2 == "number") {
//         console.log("Both numbers are vaid, Proceeding for its SUM: ");
//         return val1 + val2
//     } else {
//             return "Invalid Input. Please provide number values only"

//     }
// }

// console.log(addTwoNumber(5,"25"))

// function addTwoNumber(val1, val2) {
//     if (typeof val1 !== "number" || typeof val2 !== "number") {
//         return "Invalid Input. Please provide number values only"
//     } 
//         // console.log("Both numbers are vaid, Proceeding for its SUM: ");
//     return val1 + val2
// }

// // console.log(addTwoNumber(5,"25"))
// // console.log(addTwoNumber(5, null))
// console.log("The Sum of both Numbers :", addTwoNumber(5,25))

// Ternary Operator:
// (condition) ? value_if_true : value_if_false is used to decide the return value based on whether the condition is true or false.


// function addTwoNumber(val1,val2) {
//     return (typeof val1 === "number" && typeof val2 === "number")
//     ? val1 + val2
//     : "Invalid numbers"    
// }

// console.log(addTwoNumber(5,35))
// console.log(addTwoNumber(5,"35"))
// console.log(addTwoNumber(5,null))


// function addTwoNumber(val1, val2) {
//     val1 = !val1 ?0 :val1
//     val2 = !val2 ?0 :val2
//     console.log(`The Sum of val1 is ${val1} and val2 is ${val2}, The Sum of both numbers are `, val1 + val2);
// }

// addTwoNumber()
// addTwoNumber(5, undefined)
// addTwoNumber(5, null)
// addTwoNumber(5, 35)

//object access under the function

// let user = {
//     username: "Hitesh",
//     coursename: "JavaScript",
//     price: 199
// }

// function handleOject(anyobject) {
// console.log( `The username is ${anyobject.username} and the ${anyobject.coursename} lang. expert, the learning pack under price ${anyobject.price}`
// )}

// handleOject(user)

// handleOject({
//     username: "Sam",
//     coursename: "CPP",
//     price: 399
// })

// let myArray = [100, 200, 300, 400]

// function getArray(anyArray) {
//     return anyArray[2]
// }

// console.log(getArray(myArray))
// console.log(getArray([500, 1000, 1500, 2000]))

// function user(username) {
//     return `${username}, welcome to the site`
    
// }
// console.log(user())

// function user(username = "Guest") {
//     return `${username}, welcome to the site`
// }

// console.log(user())

// function user(username) {
//     if (username === undefined) {
//         console.log("Please enter your name");
//         return
//     }
//     return `${username}, welcome to the site`
// }

// console.log(user())

// function user(username) {
//         if (!username) {
//             console.log("Please enter your name");
//             return
//         }
//         return `${username}, welcome to the site`
//     }

//     console.log(user());
    
function user(username) {
    username= !username ? "SAM" : username
    console.log(`${username}, Just logged in`);
}
user("Rohit")
user()

function calculateShoppingCartValue (...num1){
    return num1
} 

console.log(calculateShoppingCartValue(5, 100, 400, 800))
