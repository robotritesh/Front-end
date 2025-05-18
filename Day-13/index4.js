function PrimeNumber(num){
    count = 0;

    for(i = 1; i <= num;i++){
        if(10 % i == 0){
            count++;
        }
    }

    if(count == 2){
        console.log("It is Prime")
    }
    else{
        console.log("Not Prime")
    }
}

PrimeNumber(9)