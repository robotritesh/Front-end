let num = 7;

let count = 0;

for(let i = 1; i<=num;i++){
    if(num%i == 0){
        count++
    }
}

if(count == 2){
    console.log("It is Prime")
}else{
    console.log("it is not Prime")
}