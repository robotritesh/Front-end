let num = 13;

let isPrime = true;

for(let i = 2; i < num ; i++){
    if(num % i === 0){
        isPrime = false;
    break;
    }
}

if(isPrime && num > 1){
    console.log(`${num} is the prime`)
}else{
    console.log(`${num} is not prime`)
}