let str = "babad";

function isPalindrome(string){
    let reversed = "";

    for(let i = string.length-1; i>=0;i--){
        reversed += string[i]
    }
    return reversed === string;
}

function longestPalindrome(SubstringToCheck){
    let longest = ""

for(i = 0;i < SubstringToCheck.length; i++){
    for(j = i;j < SubstringToCheck.length;j++){
        let subString = SubstringToCheck.slice(i,j+1)
        if(isPalindrome(subString) && subString.length > longest.length){
            longest = subString
        }
    }
}
return longest
}

let result = longestPalindrome(str);

console.log(result)

// let longest = ""

// for(i = 0;i<str.length;i++){
//     for(j = i;j<str.length;j++){
//         let subString = str.slice(i,j+1)
//         // console.log(subString)
//         if(isPalindrome(subString) && subString.length > longest.length){
//             longest = subString
//         }
//     }
// }

// console.log(longest)