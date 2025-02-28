let str = "ronald";

let str2 = "";

for(let i = 0; i < str.length; i++){
    if(str[i] === "r"){
        str2 += "d"
    }else{
        str2 += str[i];
    }
}

console.log(str2)