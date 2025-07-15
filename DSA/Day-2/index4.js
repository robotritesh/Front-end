let num = '2,3,4,5,6'

let count = 0;

for(i=0;i<num.length;i++){
    if(num[i]%2 == 0){
        count += i
    }
}

console.log(count)