// let arr2D = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(i = 0;i < arr2D.length;i++){
//     for(j=0;j < arr2D[0].length;j++){
//         console.log(arr2D[i][j])
//     }
// }

let arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n = arr2D.length;  // Number of rows (assuming it's a square matrix)

// Print first row (left to right)
for (let j = 0; j < n; j++) {
    console.log(arr2D[0][j]);
}

// Print diagonal (excluding first and last elements)
for (let i = 1; i < n - 1; i++) {
    console.log(arr2D[i][n - i - 1]);
}

// Print last row (right to left)
for (let j = n - 1; j >= 0; j--) {
    console.log(arr2D[n - 1][j]);
}
