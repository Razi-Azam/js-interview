/*
Return a string value containing the transformed variable name.
if variable conaining a underscore, it is a C++. so return a java variable name
Input: modify_variable_name
Output: modifyvariableName

And if the variable name is without any undescore then return it by transforming it to C++ variable
Input:  thisIsAVariable
Output: this_is_a_variable
*/

function modifyVariableName(varName) {
    for(let i = 0; i < varName.length; i++) {
        if(varName[i] === '_') {
            return transformCPlusPlus(varName)
        }
        if(varName[i] == varName[i].toUpperCase()) {
            return transformJava(varName)
        }
    }
}

function transformCPlusPlus(varName) {
    let varNameArr = varName.split('_')
    for(let i = 1; i < varNameArr.length; i++) {
        varNameArr[i] = varNameArr[i].charAt(0).toUpperCase() + varNameArr[i].slice(1)
    }

    return varNameArr.join('')
}

function transformJava(varName) {
    let newName = ''
    for(let i = 0; i < varName.length; i++) {
        if(varName[i] == varName[i].toUpperCase()) {
            newName += '_' + varName[i].toLowerCase()
        }else {
            newName += varName[i]
        }
    }
    return newName
}

// console.log(modifyVariableName('thisIsAVariable')) 
// console.log(modifyVariableName('modify_variable_name')) 


module.exports = modifyVariableName