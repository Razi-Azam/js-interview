/* ====================================================
    IIFE (Immediately invoked function expression)
======================================================*/

// (function add(num1, num2) {
//     console.log(num1 + num2);
// })(5, 2)

/* ====================================================
    Questions on IIFE
======================================================*/
// (function (x) {
//     return (function (y) {
//         console.log(x)
//     })(2)
// })(1)

/* ====================================================
    First Class Function Example
======================================================*/

// function getName(name) {
//     return name
// }

// function greetUser(func) {
//     console.log("Hi " + func)
// }

// greetUser(getName('Razi'))

/* ====================================================
    Questions on Functions
======================================================*/

// for(let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000)
// }



/* ====================================================
    Questions on Hoisting
======================================================*/

//variable declaration before function call
var firstName = "Rahul"

//function call before its definition
sayHi(firstName, lastName)

//function definition 
function sayHi(firstName, lastName) {
    console.log("Hi " + firstName + " " + lastName)
}

//variable declaration after function call
var lastName = "Singh"

/* ====================================================
    Questions on Hoisting
======================================================*/
var x = 21

var myFunc = function () {
    console.log(x)
    var x = 20
}

myFunc()