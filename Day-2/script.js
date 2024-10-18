// function even(num){
//     sum = 0;
//     for(i=1;i<=num;i++){
//         if(i%2 == 0){
//             sum += i
//         }
//         // console.log(i)
//     }
//     console.log(i)
// }

// even(5)


// let obj = {
//     name : "ritesh",
//     lastname: "dhote",
//     age: 21
// }

// let sq = obj["name"]
// console.log(sq)

// let dot = obj.lastname
// console.log(dot)

// let obj = {
//     name : "ritesh",
//     lastname: "dhote",
//     age: 21
// }

// obj.name = "rajesh"

// console.log(obj)

// let nobj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// for(let any in nobj){
//     console.log(any + ":",nobj[any])
// }

// let nobj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// for(let any in nobj){
//     if(nobj[any]%2 == 0){
//     console.log(any + ":",nobj[any])
//     }
// }

let obj = {
    firstName : "Ritesh",
    lastName: "Dhote",
    greet: function(){
        console.log("Hi everyone", this.firstName , this.lastName)
    }
}

obj.greet()