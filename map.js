//map()
const numArr = [1,2,3,4]

const addTwo = numArr.map((num, index, arr) => {
    return num + 2
}) 

console.table(addTwo)

/*==============================================
                Polyfill of map()
//==============================================*/

//here, prototype is used to add 
//method 'myMap' to the Array object
//Here, 'this' refers to the array that will be 
//passed while using the map function
Array.prototype.myMap = function(callBackFunc) {
    let newArr = []
    for(let i = 0; i < this.length; i++) {
        newArr.push(callBackFunc(this[i], i, this))
    }

    return newArr
}


/*==============================================
                Using map Polyfill
//==============================================*/
let myArr = [1,4,5]

let addOne = myArr.myMap(num => {
    return num + 1
})

console.log('Polyfill of Map')
console.table(addOne)