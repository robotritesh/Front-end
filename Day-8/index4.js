function stoneAgeGameII(t, testCases) {
    for (let i = 0; i < t; i++) {
        let n = testCases[i][0]; // Number of boxes
        let boxes = testCases[i][1]; // Stones in each box

        let leftSum = 0, rightSum = 0;
        let leftIndex = 0, rightIndex = n - 1;
        let maxDifference = -1;

        while (leftIndex < rightIndex) {
            if (leftSum < rightSum) {
                leftSum += boxes[leftIndex];
                leftIndex++;
            } else if (rightSum < leftSum) {
                rightSum += boxes[rightIndex];
                rightIndex--;
            } else { // When both sums are equal
                maxDifference = Math.max(maxDifference, Math.abs(leftIndex - (n - rightIndex - 1)));
                leftSum += boxes[leftIndex];
                leftIndex++;
            }
        }

        console.log(maxDifference);
    }
}

// Sample Test Cases
let testCases = [
    [8, [100, 1, 2, 5, 8, 97, 2, 1]],
    [5, [100, 9, 96, 2, 1]]
];

stoneAgeGameII(2, testCases);
