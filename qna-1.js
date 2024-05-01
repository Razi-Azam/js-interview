/*
        Output Based Questions on 
        map, filter, and reduce
*/

/* =======================================================
  Q 1. Return only name of the students in Capital
=========================================================*/


let studentData = [
    {name: "Razi", studId: 101, score: 92 },
    {name: "Vikas", studId: 102, score: 60 },
    {name: "Arfeen", studId: 103, score: 70 },
    {name: "Shakir", studId: 104, score: 40 },
]

//using an array
let StudentsName = []

for(let i = 0; i < studentData.length; i++) {
    StudentsName.push(studentData[i].name.toUpperCase())
}
console.log("Using an array")
console.log(StudentsName)

//using map()
const StudsName = studentData.map((stud) => {
    return stud.name.toUpperCase()
})

console.log("Using map()")
console.log(StudsName)

/* =======================================================
  Q 2. Return only details of those students who scored
       more than 60
=========================================================*/

//using filter()

const scoreAboveSixty = studentData.filter((stud) => {
    return stud.score > 60
})

console.log("Using filter()")
console.log(scoreAboveSixty)


/* =======================================================
  Q 3. Calculate the sum of scores of all the students
=========================================================*/

//using reduce()
const totalStudentsScore = studentData.reduce((acc, currStud) => {
    return acc + currStud.score
}, 0)

console.log("Using reduce()")
console.log(totalStudentsScore)

/* =======================================================
  Q 4. Return only names of the students who scored 
        more than 60
=========================================================*/

//using method chaining, filter().map()
const studNamesScoreAboveSixty = studentData.filter((stud) => {
    return stud.score > 60
}).map((stud) => {
    return stud.name
})

console.log("Return only names of the students who scored more than 60")
console.log(studNamesScoreAboveSixty)

/* =======================================================
  Q 5. Return total score for studemts with scores 
       greater than 60 after 5 marks have been added to
       those who scored less than 60
======================================================== */


//using map().filter().reduce()
const showTotalMarks = studentData.map((stud) => {
    if(stud.score < 60) stud.score += 5

    return stud
}).filter((stud) => {
    return stud.score > 60   
}).reduce((acc, currStud) => {
    return acc + currStud.score
}, 0)

console.log("Return total score for studemts with scores greater than 60 after 20 marks have been added tothose who scored less than 60")
console.log(showTotalMarks)