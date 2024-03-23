//convert decimal to binary
const alphabet = "0123456789ABCDEF";
const decimal = 175;
let currentValue = decimal;
let hex = "";
// iterate through the number till it becomes 0.
while (currentValue > 0) {
    // if modulo of number with 2 is ‘1’, append 1 in front of binary string. Otherwise append 0.
    const reminder = currentValue % 16;
    const symbol = alphabet[reminder];
    hex = symbol + hex;
    currentValue = Math.floor(currentValue / 16);
    console.log("currentValue=" + currentValue);
}
console.log("hex=" + hex);




