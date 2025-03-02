let str = "hello world";

let n = str.length;

isPresent = false

for (let i=0;i< n; i++){
     if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") { 
        isPresent = true;
    break; 
}
}

console.log(isPresent)
