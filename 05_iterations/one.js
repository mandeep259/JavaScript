//for loop


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }
// console.log(element);  outside the scope

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is the Best Number");
//         break;
//     }
//     console.log(element);
// }

// let myArray = ['Skatiman', 'Flash', 'Superman', 'Thor']

// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value is ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`INNER Loop value is ${j}`);
        // console.log(`The INNER value is ${j} and OUTER value is ${j}`);
        console.log(`${i} * ${j} =`, i * j);
    }
}