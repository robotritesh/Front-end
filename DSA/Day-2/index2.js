let str = "aabcddeesss"

let obj ={};

// for(i=0;i<str.length;i++){

//     let char = str[i]

//     if(obj[char] == undefined){
//         obj[char] = 1
//     }else{
//         obj[char]++
//     }  
// }
//    console.log(obj)


for(let char of str){
    if(!obj[char]){
        obj[char] = 1
    }else{
        obj[char]++
    }
}
console.log(obj)