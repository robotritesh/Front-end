let arr = [1,2,7,4,7,6]

let count = 0;

for(i = 0;i<arr.length;i++){
        for(j = i;j<arr.length;j++){
            let subString = arr.slice(i,j+1)
            if(subString.includes(7)){
                count++
            }
            }
        }
    
        console.log(count)