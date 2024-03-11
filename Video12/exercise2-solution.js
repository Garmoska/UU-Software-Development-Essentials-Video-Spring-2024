//TASK: A wizard decided to grow and sell a gold dragon.
// When the dragon had hatched, the wizard realized it was green, not gold.
// The time has come to deliver the dragon to the buyer, and the wizard decides to take a desperate step: repaint the dragon.
// Let's calculate how many cans of yellow paint the wizard required.
// You may split the dragon into rectangles: head and neck (2 m x 3 m), body and paws (5 m x 4 m), and tail (1 m x 3 m).
// For each square meter, the wizard needs two cans.

function getArea(a, b){
    return a * b;
}

const areaHeadNeck = getArea(2, 3);
const areaBodyPaws = getArea(5, 4);
const areaTail = getArea(1, 3);

const totalArea = areaHeadNeck + areaBodyPaws + areaTail;

const numOfCans = 2 * totalArea;

console.log("Total number of cans: " + numOfCans);


