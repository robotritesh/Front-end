let emp1 = [
    {
        name: "ritesh",
        rollno: 49,
        location: "Bhopal",
        college: "BIRT",
        hobbies: ["Cricket","Movies","Lisning Song","Traveling"],
    },
    {
        name: "ashish",
        rollno: 16,
        location: "Bhopal",
        college: "BIRT",
        hobbies: ["Cricket","Movies","Lisning Song"],
    }
    
    
]
//console.log(emp1.college)

for(let i=0; i < emp1.length; i++){
    console.log(`${emp1[i].name} has ${emp1[i].hobbies.length} hobbies`)
}