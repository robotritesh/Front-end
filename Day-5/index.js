arr = [23, 45, 56, 78, 95, 3, 9, 75];

arrmax = arr[0];

for(i = 0; i <= arr.length; i++){
    if(arr[i] > arrmax){
        arrmax = arr[i]
    }
}

console.log(arrmax)