function username (anyname = "Jay"){
    console.log("Hello, JS Learner!", `${anyname}`);
    
}

username("Mohit")

function addTwoNumber(num1, num2){
    console.log(num1 + num2);
}

addTwoNumber(5,11); //if argument not given, it give o/p as NaN.
// TolalSum = addTwoNumber(2, 3)
// console.log(TolalSum);

let multiply = function(a, b) {
    return a*b;
}

console.log(multiply(23,5));
