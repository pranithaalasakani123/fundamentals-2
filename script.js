// "use strict";

// let hasDriversLicense = false;

// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// functions
/*
function logger() {
    console.log("My name is Pranitha");
}
// calling /running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// function declaration

function calAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 = calAge1(2001);


// function expression


const calAge2 = function (birthyear) {
    return 2037 - birthyear;
}

const age2 = calAge2(2001);

console.log(age1, age2);
*/

// Arrow function

const calAge3 = birthyear => 2037 - birthyear;
const age3 = calAge3(2001);
console.log(age3);

