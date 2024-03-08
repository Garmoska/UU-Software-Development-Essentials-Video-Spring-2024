//TASK: You are going to cook Pilaf -- an oriental dish (you can choose any other dish).
//Ingredients: carrot, rice, meat, onion.
//firstly, you need to boil the ingredients, then fry them, and, eventually, mix them.
//create a function for each operation and cook the dish.

const ingredients = ["carrot", "rice", "meat", "onion"];

function boil(name){
    console.log(name + " is boiled");
}

function fry(name){
    console.log(name + " is fried");
}

function mix(items){
    console.log("Let's mix:");
    items.forEach((item) => {
        console.log(item);
    });
}

for (let i = 0; i < ingredients.length; i++) {
    boil(ingredients[i]);
}

for (let i = 0; i < ingredients.length; i++) {
    fry(ingredients[i]);
}

mix(ingredients);

console.log("Bon appetit!");