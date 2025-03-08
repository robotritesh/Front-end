let string = "pacingpingpinabcdefping"; //=> a to z

// How many time "ping" can be formed from this string

 const obj = {};

 for (let i = 0; i < string.length; i++) {
if (obj[string[i]] === undefined) {
obj[string[i]] = 1;
}
else{
obj[string[i]]++;
 }
}

 let p = obj["p"] || 0;
 let i = obj["i"] || 0;
 let n = obj["n"] || 0;
 let g = obj["g"] || 0;

 let minOcc = p;
if (i < minOcc) {
minOcc = i;
} else if (n < minOcc) {
     minOcc = n;
} else if(minOcc) {
         minOcc = g;
 }
    console.log(minOcc);