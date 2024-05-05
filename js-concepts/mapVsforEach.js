// map() vs forEach()

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