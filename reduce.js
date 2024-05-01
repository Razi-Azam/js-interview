//reduce()
const numArr3 = [1,2,3,4]

const sum = numArr3.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(sum)

/*==============================================
                Polyfill of reduce()
//==============================================*/

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



/*==============================================
                Using reduce Polyfill
//==============================================*/

const numArr4 = [1,2,3,4]

const sum2 = numArr4.myReduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(sum2)