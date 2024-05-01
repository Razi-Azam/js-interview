//filter()
const numArrTwo = [4, 17, 18, 13]

const divByTwo = numArrTwo.filter(num => {
    return num % 2 === 0
})

console.log(divByTwo)

/*==============================================
                Polyfill of filter()
//==============================================*/


Array.prototype.myFilter = function(callBackFunc) {
    let newArr = []
    for(let i = 0; i < this.length; i++) {
        if(callBackFunc(this[i], i, this) === true)
        newArr.push(this[i])
    }

    return newArr
}


/*==============================================
                Using filter Polyfill
//==============================================*/
let myArr =  [4, 17, 18, 13]

let addOne = myArr.myFilter(num => {
    return num % 2 === 0
})

console.log('Polyfill of Map')
console.log(addOne)