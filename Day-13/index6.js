let str = "abcdef"
resStr = ""
for(let i=0; i<str.length;i+=3){
    for(let j = i+2;j>=i;j--){
        resStr+=str[j]
    }
}
console.log(resStr)