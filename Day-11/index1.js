let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let n = mat.length;

let top = 0;
let bottom = n-1;

let left = 0;
let right = n-1

let bag = "";

while(left <= right && top <= bottom){
    for(let i = left; i <= right; i++){
        bag += mat[top][i] + " ";
    }
    top++;

    for(let i = top; i <= bottom; i++){
        bag += mat[i][right] + " ";
    }
    right--;

    for(let i = right; i >= left; i--){
        bag += mat[bottom][i] + " ";
    }
    bottom--;

    for(let i = bottom; i >= top; i--){
        bag += mat[i][left] + " ";
    }
    left++;
}

console.log(bag);

