/*
brute Force approach
Method 2 | Sorted Array
Time Complexity: O(n log  n)  | Space Complexity: O(n)
here, the sort() method uses either mergeSort or quicksort depending upon the JS engine. 
And the Time Complexity of sort() method is O(n log n)
*/
function findLargestElement1(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    console.log(sortedArr)
    return sortedArr[arr.length - 1]
}

//brute Force approach
//Method 1 | Using a for loop
//Time Complexity: O(n) | Space Complexity: O(1)
function findLargestElement2(arr) {
    let largest = -Infinity
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}


module.exports = findLargestElement1
module.exports = findLargestElement2

