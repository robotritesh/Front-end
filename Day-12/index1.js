function quickSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
}

// Simple way to take input
const n = 5;
const arr = [1, 2, 4, 3, 5];

const sortedArr = quickSortDescending(arr);
console.log(sortedArr.join(" "));  // Output: 5 4 3 2 1

// console.log(sortedArr) // Output: [5,4,3,2,1]