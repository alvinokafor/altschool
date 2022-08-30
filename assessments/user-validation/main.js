/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */

// let celcuisTemp = [23, 34, 43, 80, 78, 12]
// let farenheitTemp = []

// for (const index in celcuisTemp) {
//     let farenheit = (celcuisTemp[index] * 9/5) + 32
//     farenheitTemp.push(Math.trunc(farenheit))
// }
// return farenheitTemp

// const days = 'next day';



//Grade Calculator
// function gradeCalculator(studentScore, totalScore) {
//     let percentage = (studentScore/totalScore) * 100
//     let grade = ""

//     if (percentage >= 70) {
//         grade = "A"
//     } else if (percentage >=60) {
//         grade = "B"
//     } else if (percentage >=50) {
//         grade = "C"
//     } else if (percentage >=40) {
//         grade = "D"
//     } else {
//         grade = "F"
//     }

//     return `Your score is ${percentage} and your grade is ${grade}`;
// }

// let studentGrade = gradeCalculator(6, 20)
// console.log(studentGrade);


//OBJECTS
let newMusicReslease = {
    title: "...yesterday was about love",
    artist: "Odinachi",
    producer: "Retrosearth",
    releaseDate: 2022
}

function displayRelease() {
    return `${newMusicReslease.title} by ${newMusicReslease.artist} was released in 
    ${newMusicReslease.releaseDate}`
}

console.log(displayRelease())