const countries = ["France", "Great Britain", "Belgium"];

for(let i = 0; i < countries.length; i++){
    console.log(countries[i]);
}

console.log("---------------");

const anotherArray = ["car", 12, "sofa"];
for(let i = 0; i < anotherArray.length; i++){
    console.log(anotherArray[i]);
}

console.log("---------------");
countries.push("Poland");

for(let i = 0; i < countries.length; i++){
    console.log(countries[i]);
}

console.log("---------------");
countries.pop();
countries.shift();

for(let i = 0; i < countries.length; i++){
    console.log(countries[i]);
}
