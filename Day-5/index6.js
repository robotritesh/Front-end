let arr = [1,2,3,3,4,4,5,5,5,5,1,1,3,10];    //frequvency occurence

let obj = {};

for(i=0; i < arr.length; i++){
    if(obj[arr[i]] === undefined){
        obj[arr[i]] = 1;
    }
    else{
        obj[arr[i]]++
    }
}

console.log(obj);