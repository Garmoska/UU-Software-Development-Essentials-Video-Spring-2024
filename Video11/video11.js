const fruits = ["apple", "banana", "orange"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("---------------");

const anotherArray = ["car", 12, "sofa"];
for(let i = 0; i < anotherArray.length; i++){
    console.log(anotherArray[i]);
}

console.log("---------------");
fruits.push("grape");

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("---------------");
fruits.pop();
fruits.shift();

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
