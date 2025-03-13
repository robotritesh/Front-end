function calculateBill(N) {
    let fixedCharge = 80;
    let bill = fixedCharge;
    
    if (N > 150) {
        bill += (50 * 3) + (100 * 5) + ((N - 150) * 10);
    } else if (N > 50) {
        bill += (50 * 3) + ((N - 50) * 5);
    } else {
        bill += (N * 3);
    }

    return bill;
}

// Test Cases
let inputs = [0, 5, 68, 178];
inputs.forEach(N => console.log(calculateBill(N)));
