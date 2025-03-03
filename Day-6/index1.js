let str = "racecar";

let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}

//console.log(reverseStr); 

str === reverseStr ? console.log("Yes") : console.log("No");    //Ternary Operator or Conditional Operator.
