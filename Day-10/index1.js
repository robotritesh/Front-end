let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Print all the elements present in both diagonals
let n = matrix.length;

sum = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j || i + j === n - 1) {  // Condition for diagonals
            sum += (matrix[i][j])  
        }
    }
}
console.log(sum)
