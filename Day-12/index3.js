// function leapYear(year){
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//         console.log(`It is a leap year ${year}`)
//     }
//     else{
//         console.log(`It is not leap year ${year}`)
//     }
// }

// leapYear(2023);


function leapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return `It is a leap year: ${year}`;
    } else {
        return `It is not a leap year: ${year}`;
    }
}

console.log(leapYear(2023)); 
