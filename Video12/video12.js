function sum(x, y) {
    return x + y;
}

console.log(sum(2, 3));

function noReturn() {
    console.log("This function returns nothing");
}

noReturn();

const userName = "John";

//this is a pure function
function greetings(name) {
    console.log("Hello, " + name);
}

greetings(userName);

const countries = ["France", "Great Britain", "Belgium"];
countries.forEach((country) => {
    console.log("Welcome to " + country + "!");
});

console.log("--------------------")

const welcomeCountries = countries.map((country) => "Welcome to " + country + "!");

for (let i = 0; i < welcomeCountries.length; i++) {
    console.log(welcomeCountries[i]);
}

function sayHello(){
    alert("Hello!");
}

//missed arguments
function missedArgumentsFunction(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

missedArgumentsFunction(10, 20);
missedArgumentsFunction(10, 20, 30, 40);

