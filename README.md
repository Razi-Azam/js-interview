# JavaScript Interview Series
---
## Topics
[1 var, Let, and const](#var-let-const)
[2 map, filter and reduce](#map-filter-reduce)


---
## Var, Let, and, Const
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
## 2 map, filter, and reduce

### map()
- to create a new array from an existing array by applying a function to each one of the elements in the existing array.

```javaScript
const numArr = [1,2,3,4]

const addTwo = numArr.map((num, index, arr) => {
    return num + 2
}) 

console.table(addTwo)
```

output
```
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 3      │
│ 1       │ 4      │
│ 2       │ 5      │
│ 3       │ 6      │
└─────────┴────────┘
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

## Polyfills of map, filter, and reduce

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
console.table(addOne)
```

Output:
```
Polyfill of Map
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 2      │
│ 1       │ 5      │
│ 2       │ 6      │
└─────────┴────────┘
```