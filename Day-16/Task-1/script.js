// const a = "test a"; 
// const b = "This is test string";

// let isSubstring = false;

// for (let i = 0; i <= b.length; i++) {
//   let match = true;
  
//   for (let j = 0; j < a.length; j++) {
//     if (b[i + j] !== a[j]) {
//       match = false;
//       break;
//     }
//   }
  
//   if (match) {
//     isSubstring = true;
//     break;
//   }
// }

// if (isSubstring) {
//   console.log("Yes, 'a' is a substring of 'b'");
// } else {
//   console.log("No, 'a' is not a substring of 'b'");
// }




// let arr = [1, 2, 2, 3, 4, 4, 5];

// let uniqueArr = arr.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });

// console.log(uniqueArr);




// console.log(typeof undefined);
// console.log(typeof null);



// const x = Promise.resolve(10);
// x.then(console.log);



// const a = [1, 2, 3];
// const b = a.map(x => x * 2).filter(x => x > 4);
// console.log(b);



// let x = 10;
// function changeX() { x = 20;
// }
// console.log(x);
// changeX();
// console.log(x);




// console.log(0.1 + 0.2 === 0.3);  false

// console.log(typeof typeof 1);    sting

// console.log('5' - 3);            2
// console.log('5' + 3);            53



// const obj = { foo: function () { setTimeout(() => console.log(this), 1000); }
// };
// obj.foo();                         { foo: [Function: foo] }



// let result = (function(a,b){ return a + b;
// })(2,3);
// console.log(result);


// var a = 5;
// (function(){ var a = 10; console.log(a);
// })();
// console.log(a);



// const add = (a,b)=>a + b;

// console.log(add(12,34))



// function search() {
//   console.log("Searching...");
// }

// let debounceTimer;
// function debounce(fn, delay) {
//   return function() {
//     clearTimeout(debounceTimer);
//     debounceTimer = setTimeout(fn, delay);
//   }
// }

// const debouncedSearch = debounce(search, 3000);

// debouncedSearch(); // call




function log() {
  console.log("API call");
}



