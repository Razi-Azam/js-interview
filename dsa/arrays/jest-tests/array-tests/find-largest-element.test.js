const findLargestElement = require('../../find-largest-element')

test('largest element in an array', () => {
    const myArr = [2,10,3,0,17,1]
    expect(findLargestElement(myArr)).toBe(17) //checks the reference as well 
    expect(findLargestElement(myArr)).toEqual(17) //compares only the values, good to test clone array
    expect(findLargestElement(myArr)).not.toBe(10)
})
