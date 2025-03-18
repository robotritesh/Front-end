let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n = matrix.length;

let result = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || (i === 1 && j === 1)) {  
            result.push(matrix[i][j])  
        }
    }
}

console.log(result.join(" "))