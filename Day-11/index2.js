let mat = [
    [1,2],
    [3,4],
    [5,6],
];

let row = mat.length;
let col = mat[0].length;

// let transpos = [
//     [0,0,0],
//     [0,0,0],
// ];

//        ||

let transpos = Array.from({length: col}, () =>
    Array(row).fill(0))

for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        transpos[j][i] = mat[i][j];
    }
}

console.log(transpos);