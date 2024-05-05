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

// let numArr = [2,10,3,0,17,1]

// console.log("largest Element in the array is " + findLargestElement(numArr))

module.exports = findLargestElement