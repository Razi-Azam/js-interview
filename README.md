# JavaScript Interview Series
---
## Topics
[1. var, Let, and const](#var-let-const)

[2. map, filter and reduce](#map-filter-reduce)

[3. Polyfills of map, filter, and reduce](#polyfills-of-map-filter-and-reduce)

[3. map vs forEach](#map-vs-foreach)

[4. Output Based Questions Set 1](#output-based-questions-set-1)

[5. Functions - Hoisting, Scope, Callback, Arrow Functions](#functions---hoisting-scope-callback-arrow-functions)

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

let addOne = myArr.myFilter(num => {
    return num % 2 === 0
})

console.log('Polyfill of Map')
console.log(addOne)
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
