var names = ["Amit", "Nrupul", "Manideep", "Yogesh", "Amar", "Venu"];

count = 0;

for(i = 0; i < names.length; i++){
    if(names[i][0] === "A" || names[i][0] === "a"){
        count +=1
    }
}
console.log(count)