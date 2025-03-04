// let sent = "The education is the most powerful weapon which you canuse to change the world";

// count = 1;

// for(i = 0; i < sent.length; i++){
//     if(sent[i] === " "){
//         count += 1
//     }
// }

// console.log(count)







let sent = "The    education is the most powerful weapon    which you canuse to change the world";

count = 0;

isWord = false

for(i = 0; i < sent.length; i++){
    if(sent[i] !== " "){
        if(!isWord){
            count += 1;
            isWord = true
        }
    }
    else{
        isWord = false
    }
    }

console.log(count)