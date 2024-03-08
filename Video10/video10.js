//loop 1
for (let i = 1; i < 5; i++) {
    console.log(i);
}
console.log("---------------");
//loop 2
//note: this "i" and "i" from the loop above are different variables
let i = 1;
while (i < 5) {
    console.log(i);
    i++;
}
console.log("---------------");
i = 1;
while (i < 100) {
    console.log(i);
    i++; //don't forget!
    if (i === 5) break;
}
console.log("---------------");
i = 0;
while (i < 100) {
    i++;
    if (i > 5) continue;
    console.log(i);
}
console.log("---------------");
//loop 3
i = 1;
do{
    console.log(i);
    i++;
}while (i < 5);

