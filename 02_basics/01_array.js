//  Array ==> An array in JavaScript is a special type of object used to store multiple values in a single variable. An array is a collection of items stored at contiguous memory locations. The items can be of any type (e.g., numbers, strings, objects, other arrays).

let myArr = ["Mani", 9, 8 ,7 ,5, true]
console.log(myArr); //to console o/p of the array and it prints the original array.

// indexing starting from 0 and so on

console.log(myArr[5]);
console.log(`the orininal array after indexing, the value are ${myArr}`); 


//This is the most reliable way to check if a value is an array. ==> Using Array.isArray() (Recommended)
console.log(`the vaue in array is ${Array.isArray(myArr)}`);

// the array has a lenth property and also have multiple methods. some examples below

console.log('######################################################################');

let newArr = [0,1,2,3,4,5]
// console.log(newArr);
newArr.push(6) // add value to array in last and in method need to pass the value
console.log(`after push the new array is ${newArr}`);

newArr.pop() //removes the last value from the array.
console.log(`after pop the new array is ${newArr}`);

newArr.unshift(11) // in unshift method, the value is added at first in the array
console.log(`after using unshift method, the value is added in starting of the array. Here value 11 is added in starting of the array ${newArr}`);

newArr.shift(11) // in shift method, the value is remove from starting point in the ori. array (opposite of the unshift)
console.log(`after using shift method, the value is removed in starting of the array i.e 11 ${newArr}`);


console.log(newArr.includes(11)); //incluses method the value check in the array and returns in True or falue o/p.

console.log(newArr.indexOf(3));

// join method returns the value in string

console.log(typeof newArr.join());
console.log("###########################################");
//###############################################################

console.log(`The orignal array is ${newArr}`);

 //  Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.

 console.log("B ", newArr.slice(1,3));
 console.log(`The orignal array is ${newArr}`);

 //Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

 console.log("C ", newArr.splice(1,4));
 console.log(`The orignal array is and it showed spice method manuplate the original array i.e ${newArr}`);

 



