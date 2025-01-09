let person = {
    name: "Rahul",
    age: 32,
    isEmployed: true
}

console.log(person.name) //accessed by dot notation
console.log(person ['name']); //accessed by Bracet notation

console.log(person.age)

let key = "age";
console.log(person[key]);

/// adding/deleting/manupletion to objects data

person.id = 2022
// console.log(person);
person.city ="Mohali"
console.log(person);

person.age = 36
person.state ="Punjab"
console.log(person);

delete person.isEmployed; 
console.log(person);

console.log(person.hasOwnProperty("name"));
console.log("age" in person);

person.email = "deep@google.com"

console.log(person);

// Object.freeze(person)
person.email= "makhan@yahoo.com"
console.log(person.email);

function greeting (){
    console.log(`Welcome to learn JS, ${person.name}`);
    
}

greeting();


const utkarsh = {
    user: "sahil",
    empcode: 2023,
    location: "mohali",
    qualification: ["B-Tech", "M-Tech", 10, 12]
}

console.log(utkarsh);

console.log(utkarsh.qualification[2]);
console.log(utkarsh.user);

utkarsh.user = "Deep"
console.log(utkarsh);
