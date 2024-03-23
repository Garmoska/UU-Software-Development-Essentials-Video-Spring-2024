//convert decimal to binary
const decimal = 26;
let currentValue = decimal;
let binary = "";
// iterate through the number till it becomes 0.
while (currentValue > 0) {
    // if modulo of number with 2 is ‘1’, append 1 in front of binary string. Otherwise append 0.
    if (currentValue % 2 === 1) {
        binary = "1" + binary;
    } else {
        binary = "0" + binary;
    }
    // divide number by 2.
    currentValue = Math.floor(currentValue / 2);
    console.log("currentValue=" + currentValue);
}
console.log("binary=" + binary);

/////////////////////////////

const alphabet = "0123456789ABCDEF";
