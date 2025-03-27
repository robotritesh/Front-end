function quickSortPro(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for(i = 0; i < arr.length-1; i++){
        if(arr[i] > pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }

    return[...quickSortPro(left),pivot,...quickSortPro(right)]
}

const arr = [7,8,6,5,4,1,9,2]

console.log(quickSortPro(arr))