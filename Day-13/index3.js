function SecondLarge(arr){

    let largest = arr[0];
    let SecondLarge = -Infinity;

    for(let i = 0;i < arr.length;i++){
        if(arr[i] > largest){
            SecondLarge = largest;
            largest = arr[i]
        }
        else if(arr[i] > SecondLarge && arr[i] !== largest){
            SecondLarge = arr[i];
        }
    }
    return SecondLarge === -Infinity ? "not secondlarge nember":SecondLarge;
}

console.log(SecondLarge([12,8,9,20,7,20]))