function highestStockValue(n, arr) {
    let stockValue = 0;
    let maxStockValue = 0;

    for (let i = 0; i < n; i++) {
        stockValue += arr[i];
        maxStockValue = Math.max(maxStockValue, stockValue);
    }

    console.log(maxStockValue);
}

// Sample Inputs
highestStockValue(5, [1, -3, 4, 3, -2]); // Output: 5
highestStockValue(4, [-3, 2, -2, -1]);   // Output: 0
