const findLargestElement1 = require('../../dsa/arrays/find-largest-element')
const findLargestElement2 = require('../../dsa/arrays/find-largest-element')

test('largest element in an array findLargestElement1', () => {
    const myArr = [2,10,3,0,17,1]
    expect(findLargestElement1(myArr)).toBe(17) //checks the reference as well 
    expect(findLargestElement1(myArr)).toEqual(17) //compares only the values, good to test clone array
    expect(findLargestElement1(myArr)).not.toBe(10)
})

test('largest element in an array for findLargestElement2', () => {
    const myArr = [2,10,3,0,17,1]
    expect(findLargestElement2(myArr)).toBe(17)  
    expect(findLargestElement2(myArr)).toEqual(17)
    expect(findLargestElement2(myArr)).not.toBe(10)
})