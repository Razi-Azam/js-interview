/* ====================================================
    IIFE (Immediately invoked function expression)
======================================================*/

(function add(num1, num2) {
    console.log(num1 + num2);
})(5, 2)

/* ====================================================
    First Class Function Example
======================================================*/


function getName(name) {
    return name
}

function greetUser(func) {
    console.log("Hi " + func)
}

greetUser(getName('Razi'))
