let str = "aman";

let lowerStr = "abcdefghijklmnopqrstuvwxyz";

let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let output = "";
for (let i=0; i < str.length; i++) {
let char = str[i];
for (let j = 0; j < lowerStr.length; j++) {
if (char === lowerStr[j]) {
output += upperStr[j];
break;
}
}
}
console.log(output);


// let str = "aman";

// let lowerStr = "abcdefghijklmnopqrstuvwxyz";

// let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let output = "";

// for (let i=0; i < str.length; i++) {

// let charCode = str.charCodeAt(i);

// if (charCode >= 97 && charCode <= 122) {

// output += String.fromCharCode(charCode - 32);

// } else {

// output += str[i];

// }

// }