//Closure in JS
//Lexical Scope:  a function can access variables defined 
// in its outer (parent) scope, where it was physically 
// written in the code, not where it’s called from.

//global scope
let introText = "How may I help you?"

function welcomeUser(userName) {
    var greetText = "Welcome"
    var greetLine = " ------------ "
    //outer function scope
    return function greetUser() {
        //local scope
        console.log(greetLine + greetText + " " + userName + greetLine);
        console.log(introText)
    };
}

const greet = welcomeUser('Razi');
greet();
/* Output:
------------ Welcome Razi ------------ 
How may I help you?

*/

//Question: 1
let count = 0;
(function printCount() {
    console.log("Question: 1")
    if(count === 0) {
        let count = 1; //shadowing: this var will shadow out var "count"
        console.log(count);
    }
    console.log(count)
})();

/* OUTPUT
1
0
*/

//Question 2
//Write the following function 

console.log("Question: 2")
var addFive = createBase(5)
addFive(20) //output: 25
addFive(23) //output 28

function createBase(addNumber) {
    
    function add(number) {
        console.log(number + addNumber)
    }
    return add
}

//Question 3
//Time Optimization
//Optimzed this function
console.log("Question: 3")

function find(index) {
    let numArr = []

    for(let i = 0; i < 100000; i++) {
        numArr[i] = i * i
    }

    return numArr[index]
}

console.log("------without optimzation-------")
console.time("20")
console.log(find(20))
console.timeEnd("20")

//Optimzed function
function optimizedFind() {
    let numArr = []

    for(let i = 0; i < 100000; i++) {
        numArr[i] = i * i
    }

    return function (index) {
        return numArr[index]
    }
}

console.log("------Optimized Function using closure------")
let closure = optimizedFind()
console.time("20")
console.log(closure(20))
console.timeEnd("20")

/* OUTPUT
Time Difference
------without optimzation-------
400
20: 5.823ms
-----Optimized Function using closure------
400
20: 0.371ms
*/


//Question 4
//The following function print 5 five times each second
//The function should print 0 to 4 each second

console.log("Question: 4 - SetTimeout Output")
//code:1 
function timeFunc() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function printVal() {
            console.log(i)
        }, i * 1000)
    }
}   

// timeFunc()

/* OUTPUT
5
5
5
5
5
*/

//code: 2
function timeFunc2() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function printVal() {
            console.log(i)
        }, i * 1000)
    }
} 

//delay this function to 5 sec because I want
//the output of the first function first
// setTimeout(() => {
//     timeFunc2()
// }, 5000);

/* OUTPUT
0
1
2
3
4
*/

//Follow up question: print 0 to 4 without using "let"
function timeFunc3() {
    for (var i = 0; i < 5; i++) {
        (function closureFunc(j){
            setTimeout(function printVal() {
                console.log(j)
            }, j * 1000)
        })(i)
    }
}

// timeFunc3()

//Question 5: Use a closure to create a private counter.
console.log("Question: 5 - private Counter using Closure")

function counter() {
    var _counter = 0; //as per naming convention, a private counter should be created using underscore

    //to make increment
    function add(incrementVakue) {
        //here, we are not directly manipulating the 
        // private counter
        _counter += incrementVakue
    }

    //to show the value
    function showCounter() {
        console.log("Counter = " + _counter)
    }

    //return both the functions
    return {
        add,
        showCounter,
    };
}

//call the function
const counterClosure = counter();

//call each functiosn oen by one
counterClosure.add(13)
counterClosure.add(2)

counterClosure.showCounter()

/* OUTPUT
Counter = 15
*/


//Question 6: Module Pattern.
console.log("Question: 5 - Module Pattern")

const counterModule = (function() {
    // Private variable
    let count = 0;

    // Private function
    function changeBy(val) {
        count += val;
    }

    // Publicly exposed methods
    return {
        increment: function() {
            changeBy(1);
            console.log(count);
        },
        decrement: function() {
            changeBy(-1);
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
})();

// Using the module
counterModule.increment(); // Output: 1
counterModule.increment(); // Output: 2
counterModule.decrement(); // Output: 1
console.log(counterModule.getCount()); // Output: 1


//Question 7:   make this run only once
console.log("Question: 7 - make this run only once")

let channelName
function subscribe() {
    let funcCall = 0;

    return function() {
        if(funcCall > 0) {
            console.log("Already Susbcribed. Thank you!")
        } else {
            channelName = "Mehfil E Razi"
            console.log("Subscribe to ", channelName)
            funcCall++
        }
    }
}

let subscribeTheChannel = subscribe()
subscribeTheChannel()
subscribeTheChannel()
subscribeTheChannel()
subscribeTheChannel()

/* OUTPUT
Subscribe to  Mehfil E Razi
Already Susbcribed. Thank you!
Already Susbcribed. Thank you!
Already Susbcribed. Thank you!
*/


//Question 8:   Once Polyfill
console.log("Question: 8 - Once Polyfill")

function once(func, context) {
    let ran;

    return function() {
        if(func) {
            ran = func.apply(context || this, arguments)
            func = null
        }
        return ran;
    }
}

//make any function run once
const greetOnce = once((userName) => console.log("Welcome ", userName))

greetOnce("Razi")
greetOnce("Razi")
greetOnce("Razi")
greetOnce("Razi")


//Question 9: Memoize Polyfill
console.log("Question: 9 - Memoize Polyfill")

//memoize polyfills
function memoizeMe(func, context) {
    //an object to cache calculated values
    const resCache = {}

    return function(...args) {
        var argsCache = JSON.stringify(args);
        if(!resCache[argsCache]) {
            resCache[argsCache] = func.call(context || this, ...args)
        }
         return resCache[argsCache]
    }
}

//function to give square
const findSquare = (num1) => {
    //let there are some heavy calculation
    for(let i = 1; i <= 10000000; i++) {}

    return num1 * num1
}

//call the function without memoization
console.log("Without Memoization")
console.time("Call 1st");
console.log(findSquare(9999))
console.timeEnd("Call 1st");

console.time("Call 2nd");
console.log(findSquare(9999))
console.timeEnd("Call 2nd");

//memoize the findSquare function
const memoizedFindSquare = memoizeMe(findSquare);

//calling memoized function
console.log("----Memoized Function-----")
console.time("First Call");
console.log(memoizedFindSquare(9999))
console.timeEnd("First Call");


console.time("Second Call");
console.log(memoizedFindSquare(9999))
console.timeEnd("Second Call");


/* OUTPUT
Without Memoization
99980001
Call 1st: 9.655ms
99980001
Call 2nd: 8.433ms

----Memoized Function-----
99980001
First Call: 3.272ms
99980001
Second Call: 0.16ms
*/