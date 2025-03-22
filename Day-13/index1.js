function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Choosing the last element as the pivot
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elements smaller than pivot go to left
        } else {
            right.push(arr[i]); // Elements greater than pivot go to right
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arr = [8, 3, 1, 7, 0, 10, 2];
console.log("Sorted Array:", quickSort(arr));
