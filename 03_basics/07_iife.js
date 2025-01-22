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