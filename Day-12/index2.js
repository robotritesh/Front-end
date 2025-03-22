function minSwapsToBalance(s) {
    let openCount = 0, closeCount = 0;

    for (let char of s) {
        if (char === '[') {
            openCount++;  
        } else {
            if (openCount > 0) {
                openCount--;  
            } else {
                closeCount++;  
            }
        }
    }

    return Math.ceil(closeCount / 2);
}

const input = `3
4
[[]]
6
]]][[[
2
[]`;

const lines = input.split("\n");
let testCases = parseInt(lines[0]);
let index = 1;
let results = [];

for (let i = 0; i < testCases; i++) {
    let n = parseInt(lines[index]);  
    let s = lines[index + 1];  
    index += 2;  

    results.push(minSwapsToBalance(s));  
}

console.log(results.join("\n"));  

