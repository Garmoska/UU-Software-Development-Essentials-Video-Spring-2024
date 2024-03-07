const x = 100;
const xString = x.toString();

const y = "200";
const yNum = parseInt(y);

console.log("-------------------");
if (y == 200) {
    console.log("it is 200");
} else {
    console.log("not 200");
}
console.log("-------------------");
if (y === 200) {
    console.log("it is 200");
} else {
    console.log("not 200");
}
console.log("-------------------");
console.log(16 + "test");
console.log("test" + 16);
console.log("-------------------");
console.log(16 + "10");
console.log("10" + 16);
console.log("-------------------");
console.log("16" - 10);
console.log(16 - "10");
console.log("-------------------");
console.log(parseInt("fifty"));