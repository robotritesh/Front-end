const student = {
name: "Bob",
marks: {
math: 90,
science: 50,
english: 67,
}
}

for(let key in student.marks){
    console.log(key)
    console.log(student.marks[key])
}