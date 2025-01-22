// function addTwoNumbers (num1, num2){
//     // console.log(this); 
//     return num1 + num2
    
// }

// console.log(addTwoNumbers(5,5))

// console.log(this);  //Globally, this is return as empty object


// let user = {
//     username: "Hitesh",
//     price: 199,
    
//     welcomemessage: function () {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
        
//     }
// }

// user.welcomemessage()
// user.username = "Sam" //username is accessed using the dot method and changed the value to sam
// user.welcomemessage()
// // console.log(this);


// function chai (){
//     let username = "Rahul"
//     // console.log(this.username); //this cann't be used  under the function, it return as undefined if accessed any value
//     console.log(this); //here this shows the some global values
// }

// chai()
// console.log(this);
//Arrow function 

// const chai = function () {
//     let username = "Mukesh";
//     // console.log(this.username);
//        console.log(this);
// }

// chai()

// const chai = () => {
//     let username = "Mukesh";
//     // console.log(this.username); //it returns as undefined.
//        console.log(this); //here in arrow function, this shows the empty object
// }

// chai()

//Arrow function

// () => {} represents the arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //implicent function

// const addTwo = (num1, num2) => (num1 + num2)

//if there is object 
// const addTwo = () => {username: "Hitesh"}
const addTwo = () => ({username: "Hitesh"})

console.log(addTwo(5,5))
