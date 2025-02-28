var names = ["Amit", "Nrupul", "Manideep", "Yogesh", "Amar", "Venu"];

count = 0;

for(i = 0; i < names.length; i++){
    for(j = 0; j < names[i].length; j++){
        if(names[i][j] === "A" || names[i][j] === "a"){
            count +=1;
            break;
        }
    }
}
console.log(count)