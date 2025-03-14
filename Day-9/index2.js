let str = "babad";

function expand(string, left, right){
    while(left >= 0 && right < string.length && string[left] === string[right]){
        left--
        right++
    }
    return string.slice(left +1,right)
}

function longestPalindromeSubstring(s){
    if(s.length === 0){
        return ""
    }
    let longest = ""
    for(let i = 0; i < s.length;i++){
        let oddPalindrome = expand(s,i,i)
        if(oddPalindrome.length > longest.length){
            longest = oddPalindrome
        }

        let evenPalindrome = expand(s, i, i + 1)
        if(evenPalindrome.length > longest.length){
            longest = evenPalindrome
        }
    }
    return longest
}

let result = longestPalindromeSubstring(str);

console.log(result);