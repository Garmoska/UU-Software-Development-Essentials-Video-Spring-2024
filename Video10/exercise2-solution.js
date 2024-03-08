//TASK Scoop water from a barrel
let liquidInBarrel = 100;
const spoonVolume = 10;

do {
    liquidInBarrel -= spoonVolume;
    console.log("Liquid in Barrel:" + liquidInBarrel);
}
while (liquidInBarrel > 0);
