const modifyVariableName = require('../../dsa/string/transform-var-name')

test('Transform variable name to Java', () => {
    const varName1 = 'modify_variable_name'
    const transformedName1 = 'modifyVariableName'
    expect(modifyVariableName(varName1)).toBe(transformedName1) 
    expect(modifyVariableName(varName1)).toEqual(transformedName1)
})

test('Transfrom variable name to C++', () => {
    const varName2 = 'thisIsAVariable'
    const transformedName2 = 'this_is_a_variable'
    expect(modifyVariableName(varName2)).toBe(transformedName2)  
    expect(modifyVariableName(varName2)).toEqual(transformedName2)
})