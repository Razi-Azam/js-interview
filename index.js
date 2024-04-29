/*
output: 
Error - Cannot access 'b' before initialization
Reason - let and const are not hoisted like 'var'
They are in temporal dead zone
Temporal Dead Zone? 
//a state where variables are in scope but not yet declared

function showval() {
    console.log(a, b, c)

    var a = 30;
    const b = 10;
    let c = 12;
}

showval() */

//================================================
/*
map, filter and reduce
*/
const numArr = [1,2,3,4]

const addTwo = numArr.map((num, index, arr) => {
    return num + 2
}) 

console.table(addTwo)

//filter

const numArr2 = [4, 17, 18, 13]

const divByTwo = numArr2.filter(num => {
    return num % 2 === 0
})

console.log(divByTwo)

//reduce
const numArr3 = [1,2,3,4]

const sum = numArr3.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(sum)
