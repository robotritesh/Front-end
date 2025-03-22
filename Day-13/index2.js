function quickSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Choosing the last element as the pivot
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {  // Change condition to '>' for descending order
            left.push(arr[i]); // Elements greater than pivot go to left
        } else {
            right.push(arr[i]); // Elements smaller than pivot go to right
        }
    }

    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
}

// Example usage:
const arr = [10, 8, 7, 3, 2, 1, 0];
console.log("Sorted in Descending Order:", quickSortDescending(arr));
