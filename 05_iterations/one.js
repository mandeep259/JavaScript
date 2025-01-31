//for loop


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }
// console.log(element);  outside the scope

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        console.log("5 is the Best Number");
        break;
    }
    console.log(element);
}