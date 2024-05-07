/*
Return a string value containing the transformed variable name.
if variable conaining a underscore, it is a C++. so return a java variable name
Input: modify_variable_name
Output: modifyvariableName

And if the variable name is without any undescore then return it by transforming it to C++ variable
Input:  thisIsAVariable
Output: this_is_a_variable


Time Complexity: O(n)
Space Complexity: O(n)
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

module.exports = modifyVariableName

/*
======================================================
Optimzed version of the above code 
Time Complexity: O(n)
Space Complexity: O(n)
=====================================================
*/

function modifyVariableName2(varName) {
    if (varName.includes('_')) {
        return transformCPlusPlus2(varName);
    } else {
        return transformJava2(varName);
    }
}

function transformCPlusPlus2(varName) {
    let newName = '';
    let capitalizeNext = false;

    for (let i = 0; i < varName.length; i++) {
        if (varName[i] === '_') {
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                newName += varName[i].toUpperCase();
                capitalizeNext = false;
            } else {
                newName += varName[i];
            }
        }
    }

    return newName;
}

function transformJava2(varName) {
    let newName = '';

    for (let i = 0; i < varName.length; i++) {
        if (varName[i] === varName[i].toUpperCase() && i !== 0) {
            newName += '_' + varName[i].toLowerCase();
        } else {
            newName += varName[i];
        }
    }

    return newName;
}

// console.log(modifyVariableName2('thisIsAVariable')) 
// console.log(modifyVariableName2('modify_variable_name')) 

/*
======================================================
Using Regular expression
Time Complexity: O(n)
Space Complexity: O(n)
=====================================================
*/
function modifyVariableName3(varName) {
    if (varName.includes('_')) {
        return transformCPlusPlus3(varName);
    } else {
        return transformJava3(varName);
    }
}

function transformCPlusPlus3(varName) {
    return varName.replace(/_([a-z])/g, (_, match) => match.toUpperCase());
}

function transformJava3(varName) {
    return varName.replace(/[A-Z]/g, match => '_' + match.toLowerCase());
}

console.log(modifyVariableName3('thisIsAVariable')) 
console.log(modifyVariableName3('modify_variable_name')) 