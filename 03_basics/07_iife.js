// IMMEDIATEDLY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai (){
    //named IIFE
    console.log("DB CONNECTED");
}) ();

// chai()

// () () iife syntax

( () => {
    console.log("DB CONNECTED TWO");
    } )();

( (name) => {
    console.log(`DB CONNECTED THREE by, ${name}`);
    
} ) ("Hitesh")


let counter = ( () => {
    let counter =0;
    return {
        increment: () => {
            counter ++
            console.log(`Increment Counter, ${counter}`);
            },
        decrement: () => {
            counter --;
            console.log(`Decrement Counter, ${counter}`);
        }
    }
} )()

counter.increment();
counter.increment();
counter.decrement();
// let counter = ( () => {
//     let count = 0;
    
//     return {
//       increment: () => {
//         count++;
//         console.log("Counter:", count);
//       },
//       decrement: () => {
//         count--;
//         console.log("Counter:", count);
//       }
//     };
//   } ) ();
  
//   counter.increment();  // Output: Counter: 1
//   counter.increment();  // Output: Counter: 2
//   counter.decrement();  // Output: Counter: 1
  