str = 'jaguar'

// console.log(str.slice(1,5))   agua

for(let i = 0; i<str.length;i++){
    for(let j=i;j<str.length;j++){
        let substring = str.slice(i,j+1);
        console.log(substring)
    }
}