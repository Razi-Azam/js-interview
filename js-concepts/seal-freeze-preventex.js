let student = {
    name: "Rahul",
    age: 23,
    address: "New Delhi"
}


/*
    object.freeze()
*/
console.log("Original Object", student)
Object.freeze(student)
//update
student.name = "Razi"
//add
student.rank = 1
//delete
delete student.address
console.log("Object.freeze() ")
console.log(student)

//===============================================
let employee = {
    name: "Amogh",
    age: 27,
    address: "Haryana"
}

/*
    object.seal()
*/
console.log("Original Object", employee)
Object.seal(employee)
//update
employee.name = "Razi"
//add
employee.designation = "Staff"
//delete
delete employee.address
console.log("Object.seal() ")
console.log(employee)

// =======================================
let book = {
    title: "3 mistakes of my life",
    price: 399,
    author: "John"
}

/*
    object.preventExtensions()
*/
console.log("Original Object", book)
Object.preventExtensions(book)
//update
book.title = "3 mistakes"
//add
book.language = "English"
//delete
delete book.author
console.log("Object.preventExtensions() ")
console.log(book)



/*
=============================================
     OUTPUT
=============================================

Original Object 
{ name: 'Rahul', age: 23, address: 'New Delhi' }

Object.freeze() 
{ name: 'Rahul', age: 23, address: 'New Delhi' }

----------------------------------------------------
Original Object 
{ name: 'Amogh', age: 27, address: 'Haryana' }

Object.seal() 
{ name: 'Razi', age: 27, address: 'Haryana' }

----------------------------------------------------
Original Object 
{ title: '3 mistakes of my life', price: 399, author: 'John' }

Object.preventExtensions() 
{ title: '3 mistakes', price: 399 }




*/