function manOfTheMatch(t, testCases) {
    for (let i = 0; i < t; i++) {
        let n = testCases[i][0]; // Number of overs
        let balls = testCases[i][1]; // Array of runs
        
        let viratRuns = 0, abRuns = 0;
        let isABOnStrike = true; // AB de Villiers starts on strike

        for (let j = 0; j < balls.length; j++) {
            if (isABOnStrike) {
                abRuns += balls[j];
            } else {
                viratRuns += balls[j];
            }

            // Strike rotation conditions
            if (balls[j] === 1 || balls[j] === 3 || (j + 1) % 6 === 0) {
                isABOnStrike = !isABOnStrike;
            }
        }

        if (viratRuns > abRuns) {
            console.log("Virat Kohli");
        } else if (abRuns > viratRuns) {
            console.log("AB de Villiers");
        } else {
            console.log("Tie");
        }
    }
}

// Sample Test Cases
let testCases = [
    [2, [1, 2, 0, 0, 1, 1, 6, 6, 4, 1, 6, 1]], 
    [3, [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 6, 6, 6, 1, 4, 4]], 
    [1, [0, 1, 0, 1, 0, 0]]
];

manOfTheMatch(3, testCases);
