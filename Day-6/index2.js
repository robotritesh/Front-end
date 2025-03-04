let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenSum += arr[i]; 
    } else {
        oddSum += arr[i];
    }
}

evenSum > oddSum ? console.log("Even"):console.log("Odd")
