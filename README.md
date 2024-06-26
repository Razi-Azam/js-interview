# JavaScript Interview Series
---
## Topics
[1. var, Let, and const](#var-let-const)

[2. map, filter and reduce](#map-filter-reduce)

[3. Polyfills of map, filter, and reduce](#polyfills-of-map-filter-and-reduce)

[3. map vs forEach](#map-vs-foreach)

[4. Output Based Questions Set 1](#output-based-questions-set-1)

[5. Functions - Hoisting, Scope, Callback, Arrow Functions](#functions---hoisting-scope-callback-arrow-functions)

[6. Spread vs rest Operator](#spread-vs-rest-operators)

[7. Unit test using Jest](#unit-test-using-jest)

[8. Seal vs Freeze vs preventExtensions](#seal-vs-freeze-vs-preventextensions)

[9. Closure](#closure)


---
## var let  const
[Go to Top](#topics)

### (1.1) What is Scope?
- A scope is a certain region of a program where a defined variable exists and recognized.

#### types of scoep
- Global scope: variables can be accessed from anywhere in the program.
- Function scope: variables can only be accessed within the function.
- Block scope: variables can only be accessed with the block.

#### NOTE: var is function scoped but let and const are block scoped.


### (1.2) variable shadowing?
- A variable, which is already defined outside of the function, defined again inside the function, the inner function variable will overlap outside variable. This is known as variable shadowing.

For example,
```javaScript
function myFunc() {
    let greet = "Hey";

    if(true) {
        let greet = "Hello";
        console.log(greet); 
    }
    console.log(greet); 
}
```
#### OUTPUT
```
Hello
Hey
```

- It should not cross the boundary of scope. For example, we can shadow var variable by let but cannot do the opposite (illegal shadowing).

```javaScript
//illegal shadowing
function myFunc() {
    let greet2 = "Hey";

    if(true) {
        var greet2 = "Hello";
        console.log(greet2); 
    }
    console.log(greet2); 
}

myFunc()
```

#### OUTPUT
```
SyntaxError: Identifier 'greet2' has already been declared

```

### (1.4) Difference between let, const, and var
### var
- can be re-declared. ✅
- function scoped. ✅
- can be declared without initialization. ✅
- can be re-initialized.✅

### let
- cannot be re-declared. ❌
- block scoped. ✅
- can be declared without initialization. ✅
- can be re-initialized.✅

### const
- cannot be re-declared. ❌
- block scoped. ✅
- cannot be declared without initialization. ❌
- cannot be re-initialized. ❌


### (1.5) Hoisting
- During the creation phase, JavaScript engine moves the declarations of variables, functions, and classes at the top of their scope.
- Due to hoisting, we can use functions, variables, and classes before they are declared.

NOTE: const and let are not hoisted in temporal dead zone not like var. so, we cannot use them before initialization.

- Temporal dead zone: A state where variables are in the scope but they are not yet declared. 


### (1.6) JavaScript Engine
- When we execute a javascript program, a global execution context is created which has two phases (memory or Creation phase and execution phase).
#### Creation/ Memeory Phase
- It scans all the variables and put them into the creatiion phase and initialize them with a spceial value "undefined".
- It takes the complete function and put into the stack.
#### Execution Phase
- The code is executed line by line from assigning values to calling functions.
- For every new functions, JS creates a new execution context.

---

## map filter reduce
[Go to Top](#topics)

### map()
- to create a new array from an existing array by applying a function to each one of the elements in the existing array.

```javaScript
const numArr = [1,2,3,4]

const addTwo = numArr.map((num, index, arr) => {
    return num + 2
}) 

console.log(addTwo)
```

output
```
[ 3, 4, 5, 6 ]
```

### filter()
- It takes each element from an array, applies condition on it, and return the element if the condition is true.
- It returns an array of filtered elements only which satisfies the condition.

```javaScript
const numArr2 = [4, 17, 18, 13]

const divByTwo = numArr2.filter(num => {
    return num % 2 === 0
})

console.log(divByTwo)
```

Output:
```
[ 4, 18 ]
```

### reduce()
- It reduces the array into a single value.
- It takes a callback function and an initial value.
- If there is no any initial value, it takes the first element of array.

```javascript
const sum = numArr3.reduce((accumulator, current, index, array) => {}, 0)
```

```javaScript
const numArr3 = [1,2,3,4]

const sum = numArr3.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(sum)
```

Output:
```
10
```

---

## Polyfills of map, filter, and reduce
[Go to Top](#topics)

### Polyfill of map()
- Here, prototype is used to add method 'myMap' to the Array object.
- 'this' refers to the array that will be used with the map function.

```javaScript
Array.prototype.myMap = function(callBackFunc) {
    let newArr = []
    for(let i = 0; i < this.length; i++) {
        newArr.push(callBackFunc(this[i], i, this))
    }

    return newArr
}
```
- Using the above myMap function.

```javaScript
let myArr = [1,4,5]

let addOne = myArr.myMap(num => {
    return num + 1
})

console.log('Polyfill of Map')
console.log(addOne)
```

Output:
```
Polyfill of Map
[ 2, 5, 6 ]

```

### Polyfill of filter()
- Same as the map function but here, we'll check the condition before pushing the element into the new array.

```javaScript
Array.prototype.myFilter = function(callBackFunc) {
    let newArr = []
    for(let i = 0; i < this.length; i++) {
        if(callBackFunc(this[i], i, this) === true)
        newArr.push(this[i])
    }

    return newArr
}
```

- Using the above myFilter function.

```javaScript
let myArr =  [4, 17, 18, 13]

let divisibleByTwo = myArr.myFilter(num => {
    return num % 2 === 0
})

console.log('Polyfill of Map')
console.log(divisibleByTwo)
```

Output
```
[ 4, 18 ]
```


### Polyfill of reduce()
- It is different from map and filter as it takes a callback function and an initial value.
- Assign an initial value to the accumulator variable.
- If the initial value is not provided then assign the first element of an array as its initial value.


```javaScript
Array.prototype.myReduce = 
    function (callbackFunc, initialValue) {
    var accumulator = initialValue

    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator 
            ? callbackFunc(accumulator, this[i], i, this)
            : this[i]
    }

    return accumulator;
}

```

- Using the above myReduce function.

```javaScript
const numArr4 = [1,2,3,4]

const sum2 = numArr4.myReduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(sum2)
```

Output
```
10
```

---

## map vs forEach
[Go to Top](#topics)

|     map       |    forEach    |
| ------------- | ------------- |
| It returns a new array  | it doesn't return anything but 'undefined' |
| It doesn't modify the original array  | It does  |
| Method chaining can be performed. For example, arr.filter().map() | The method chaining technique cannot be performed because it doen't return anything |

### Code Example
```javaScript
const numArr = [4, 2, 0, 3, 1]

//map()
const mapOutput = numArr.map(numArrElm => {
    return numArrElm * 3
})

console.log('Map Output')
console.log(mapOutput)

console.log('original Array is Unchanged')
console.log(numArr)

//forEach
const forEachOutput = numArr.forEach((numArrElm, index) => {
    return numArrElm * 3
})

console.log('forEach Output')
console.log(forEachOutput)

const forEachOutput2 = numArr.forEach((numArrElm, index) => {
    numArr[index] = numArrElm * 3
})

console.log('original Array is modified by forEach')
console.log(numArr)
```

### output
```css
Map Output
[ 12, 6, 0, 9, 3 ]

original Array is Unchanged
[ 4, 2, 0, 3, 1 ]

forEach Output
undefined

original Array is modified by forEach
[ 12, 6, 0, 9, 3 ]

```

---

## Output Based Questions Set 1
[Go to Top](#topics)


```javaScript
let studentData = [
    {name: "Razi", studId: 101, score: 92 },
    {name: "Vikas", studId: 102, score: 60 },
    {name: "Arfeen", studId: 103, score: 70 },
    {name: "Shakir", studId: 104, score: 40 },
]
```
### Question 1
- Return only name of the students in Capitalized.

### Question 2
- Return only details of those students who scored more than 60.

### Question 3
- Calculate the sum of scores of all the students.

### Question 4
- Return only names of the students who scored more than 60

### Question 5
- Return total score for studemts with scores greater than 60 after 20 marks have been added tothose who scored less than 60.
- in the above question, first add the additional score to those students who scored less than 60.
- Then, filter the students who scored more than 60 now.
- Lastly, calculate the sum of the scores of students.

### ✅ 🤔 For Solution, please check the code file named "qna-1.js" in the repo.

---

## Functions - Hoisting, Scope, Callback, Arrow Functions
[Go to Top](#topics)

### Function Declaration/Defintion
```javaScript
function greet(name) {
    return `Hi ${name}`
}
```

### Function Expression
- The second part (after =) is called anonymous function.

```javaScript
const greet = function (name) {
    return `Hi ${name}`
}
```

### First Class Function
- Since in JS, a function is treated like a variable which can be assigned to a variable, passed as an argument to a function or return from a function. 

```javaScript
function getName(name) {
    return name
}

function greetUser(func) {
    console.log("Hi " + func)
}

greetUser(getName('Razi'))
```

Output:
```
Hi Razi
```

### IIFE
- Immediately invoked function expression.
- It is a kind of function that is called immediately after declaration.

```javaScript
(function add(num1, num2) {
    console.log(num1 + num2);
})(5, 2)
```
### Questions of IIFE
- Due to closer, in the following code, the inner function can access the properties of its parent function.

```javascript
(function (x) {
    return (function (y) {
        console.log(x)
    })(2)
})(1)
```
Output:
```
1
```

### Questions on functions Example 1
- In each iteration of the loop, a new binding for i is created due to let.
- Each setTimeout function captures the correct value of i at the time it was created.
- When the setTimeout functions execute, they log the values of i from 0 to 4, which were captured during their respective iterations.

```javascript
for(let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}
```
Output:
```
0
1
2
3
4
```
### Questions on functions Example 2
- There's only one variable i for the entire loop, shared across all iterations due to var.
- After the loop finishes executing, the value of i is 5.
- When the setTimeout functions execute, they all access the same variable i, which has the final value 5.
- Therefore, all the setTimeout functions log the value 5.

```javascript
for(var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}
```
Output:
```
5
5
5
5
5
```

### Reason for different outputs for the above code example
- In JavaScript, var and let have different scoping behaviors, which leads to the difference in output between the two code snippets.

### To get the desired output using 'var'
-  Use an IIFE to create a new scope for i within each iteration.

```javascript
for(var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    })(i);
}
```

Output
```
0
1
2
3
4
```

### Hoisting
-  In javaScript, due to hoisting, variable declarations are moved to the top of their scope during the compilation phase.
- variables including function expressions (arrow function) are assigned a spceial value "undefined".
- But the complete functions are copied and hoisted in the global scope.

```javascript
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
```

Output
```
Hi Rahul undefined
```

### Question on hoisting
Code explanation:
- Inside myFunc, the statement var x = 20; creates a new variable x within the function scope. This variable declaration "shadows" the outer variable x, meaning that references to x within myFunc will refer to the inner x variable.
- However, since JavaScript has hoisting, the inner x variable is hoisted to the top of the function scope, effectively making it exist throughout the entire function.
- When console.log(x); is executed inside myFunc, it refers to the inner x variable. At this point, x exists but hasn't been assigned a value yet due to hoisting, so it logs undefined.
- Finally, the var x = 20; line assigns the value 20 to the inner x variable.

```javascript
var x = 21

var myFunc = function () {
    console.log(x)
    var x = 20
}

myFunc()
```

Output
```
undefined
```

### Callback Function
- It is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action or routine.
- Usage: Callback functions are commonly used with asynchronous operations like fetching data from a server, handling events, or executing code after a timer has elapsed.
- Examples, forEach, map, filter, reduce, setTimeout, setInterval, addEventListener are just a few examples of built-in functions in JavaScript that accept callback functions. 

```javascript
setTimeout(function() {
    console.log('Delayed execution');
}, 1000); // Logs 'Delayed execution' after 1 second


document.addEventListener('click', function() {
    console.log('Document clicked');
});
```

### A simple callback function example
```javascript
function greet(userName) {
    console.log('Hi ' + userName)
}

//greet is passed as callback function
function getUserName(callback) {
    var userName = "Razi"
    callback(userName)
}

getUserName(greet)
```

Output:
```
Hi Razi
```


### Arrow Functions
- Arrow functions are a concise way to write function expressions in JavaScript.
- They were introduced in ECMAScript 6 (ES6).

```javascript
const add = (a, b) => a + b;
console.log(add(3, 5)); // Output: 8
```

- Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding lexical context (i.e., the context in which they are defined).
```javascript
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

user.showUser1() //arrow function call
user.showUser2() //bormal function call
```

Output:
```
This is undefined
This is Razi
```

- Cannot be used as constructors: Arrow functions cannot be used as constructors with the new keyword. Attempting to do so will result in a TypeError.
- No super and new.target Binding: Arrow functions do not have their own super or new.target bindings.
- The arguments object is not available in arrow functions.


### Guess the Output
- Here, the argument object is used inside the function.

```javascript
function fn() {
    console.log(arguments);
}

fn(1, 3, 2);
```

Output:
```
[Arguments] { '0': 1, '1': 3, '2': 2 }
```

Explanation:
- In JavaScript, the arguments object is an array-like object that contains all the arguments passed to a function. It is available inside all functions, regardless of whether the function explicitly declares parameters.







--- 

## Spread vs Rest Operators
[Go to Top](#topics)

- The spread and rest operators are both introduced in ECMAScript 6 (ES6) and are denoted by the same syntax: three consecutive dots (...). However, they are used in different contexts and have different behaviors in JavaScript.

### Spread Operator (...):
- The spread operator is used to expand an iterable (like an array or a string) into individual elements.
- It's primarily used in function calls and array literals.
- When used in function calls, it allows an iterable to be expanded into individual arguments.
- When used in array literals, it allows an array to be expanded into another array or into function arguments.

Example usage in function calls:
```javascript
const numbers = [1, 2, 3];
console.log(...numbers); // Logs: 1 2 3
```

Example usage in array literals:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Logs: [1, 2, 3, 4, 5]
```

### Rest Parameter (...):
- The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
- It's used in function declarations to capture all remaining arguments into a single array parameter.
- It must be the last parameter in the parameter list.

Example usage in function declarations:
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Logs: 6
```

An Example where both spread and rest operators are used
```javascript
//rest operator is used to capture all the values of numArr
function multiply(...nums) {
    console.log(nums[0] * nums[1])
}

var numArr = [4, 3]

//here, speard operator is used to spread the numArr values
multiply(...numArr)
```

---


## Unit test using Jest
[Go to Top](#topics)

### Jest Configuration
- First, install the JSON package.
- The -y flag (short for yes) is used to automatically answer “yes” to any prompts that npm might print on the command line.

```javascript
npm init -y
```

- Install Jest.

```javascript
npm i --save-dev jest
```

- In the package.json file, enter "jest" as the to run the test.

```javascript
  "scripts": {
    "test": "jest"
  }
```

- Export the file.js which is to be tested.

```javascript
//brute Force approach
function findLargestElement(arr) {
    let largest = -Infinity
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

module.exports = findLargestElement
```

- Create a test file using Filename.test.js.
- Import the file that is to be tested.
- Create a test suite using "test()".

```javascript
const findLargestElement = require('../../find-largest-element')

test('largest element in an array', () => {
    const myArr = [2,10,3,0,17,1]
    expect(findLargestElement(myArr)).toBe(17) //checks the reference as well 
    expect(findLargestElement(myArr)).toEqual(17) //compares only the values, good to test clone array
    expect(findLargestElement(myArr)).not.toBe(10)
})
```

- Run the test using the following command:

```javascript
npm test
```

Output:
![alt text](image.png)

- To view the test wit complete coverage.
- Add "--coverage" in package.json.
- It also generate an HTML file (index.html) that can be viewed in the browser.
```javascript
  "scripts": {
    "test": "jest --coverage"
  },
```

Output:
![alt text](image-1.png)


---

## Seal vs Freeze vs preventExtensions
[Go to Top](#topics)

### Object.Seal()
- Editable.
- Cannot delete or add.

### Object.preventExtensions()
- Editable.
- Can delete.
- Cannot add.

### Object.freeze()
- Non-Editable
- Cannot do anything.

### Comparison Table

| Method                | Deletion? | Updation? | Addition? |
|-----------------------|-----------|-----------|-----------|
| `Object.seal()`      |    ❌      |    ✔️     |    ❌     |
| `Object.freeze()`    |    ❌      |    ❌     |    ❌     |
| `Object.preventExtensions()` |    ✔️     |    ✔️     |    ❌     |



#### 📝 Note: Code for the above is added in the seal-freeze-preventex.js under the js-concepts folder


### Problem statement : 
Amit is a salesman who wishes to know the maximum revenue received from a given item of the N products each day . 
Amit has a sales record of N products for M days.
Help amit to find the highest revenue received each day.

### Input : 
,,,
The first line of the input consists of two space-separated integers- day(M) and item(N) representing the days and the products in the sales record.

The next M lines consist of N space separated integers representing the sales revenue from each product each day.
'''

### Output: 
Print m space-separated integers representing the maximum revenue received each day .

Example Input:
3 4
101 123 234 344
143  282 499 493
283 493 202 304

Output:
344 499 493
*/

//no  of days = m 
//no. of products = n

## Closure
[Go to Top](#topics)
- A closure in JavaScript is a function that retains access to its outer lexical scope, even when the function is executed outside that scope.

### Usage:
- Data Privacy: Closures can be used to create private variables and methods.
- Function Factories: Creating functions with pre-configured parameters.
- Event Handlers and Callbacks: Maintaining state between function calls.


### Question: Remove duplicate from an array.

```javaScript

I don't really understand precisely what inbuild functions are or to what extent is a function inbuilt, so I'm assuming I'm not allowed to use indexOf, hasOwnProperty, Array.prototype.push, ...

const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

function removeDuplicate(arr) {
    const result = [];
    let idx = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[idx] = arr[i];
            idx++;
        } 
    }
    return result;
}

console.log(removeDuplicate(input));
```
