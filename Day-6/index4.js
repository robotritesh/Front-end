let names = ["Aman", "Nrupul", "Pulkit", "Varun", "Shaktimaan"];

sum = 0;

for(i = 0; i< names.length; i++){
    let name = names[i];
    sum += name.length
}

console.log(sum)