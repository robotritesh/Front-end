let movies = ["Bahubali", "pushpa", "Gajini", "Gangubai"]

for(let i = 0; i < movies.length; i++){
    if(movies[i] === "Gajini" || movies[i] === "gajini"){
        continue;
    }
    console.log(movies[i])
}