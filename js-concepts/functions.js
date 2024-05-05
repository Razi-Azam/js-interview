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
// var x = 21

// var myFunc = function () {
//     console.log(x)
//     var x = 20
// }

// myFunc()

/* ====================================================
    Spread vs rest operator
======================================================*/

//rest operator is used to capture all the values of numArr
function multiply(...nums) {
    console.log(nums[0] * nums[1])
}

var numArr = [4, 3]

//here, speard operator is used to spread the numArr values
multiply(...numArr)

/* ====================================================
    Callback Function
======================================================*/
function greet(userName) {
    console.log('Hi ' + userName)
}

//greet is passed as callback function
function getUserName(callback) {
    var userName = "Razi"
    callback(userName)
}

getUserName(greet)

/* ====================================================
    Arrow Function
======================================================*/
let user = {
    userFirstName: "Razi",
    userLastName: "Azam",
    showUser1: () => {
        console.log("This is " + this.userFirstName)
    },
    showUser2: function() {
        console.log("This is " + this.userFirstName)
    }
}

user.showUser1()
user.showUser2()