let barrel1 = 60;
let barrel2 = 40;

let totalAmount = barrel1 + barrel2;
let equilibriumPoint = totalAmount / 2;

if (barrel1 < equilibriumPoint){
    barrel1 = barrel1 + (equilibriumPoint - barrel1);
}

if (barrel1 > equilibriumPoint){
    barrel1 = barrel1 - (barrel1 - equilibriumPoint);
}

if (barrel2 < equilibriumPoint){
    barrel2 = barrel2 + (equilibriumPoint - barrel2);
}

if (barrel2 > equilibriumPoint){
    barrel2 = barrel2 - (barrel2 - equilibriumPoint);
}

console.log(barrel1);
console.log(barrel2);
