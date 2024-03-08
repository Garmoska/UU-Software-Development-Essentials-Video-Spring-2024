const dtNow = Date.now().toString();
console.log("date and time now:" + dtNow);

//in JS months are 0-based
//put date = 32
const dt = new Date(1975, 11, 1);
console.log("specified date: " + dt.toString());
console.log("full year: " + dt.getFullYear());
console.log("month: " + dt.getMonth());

const dtStr1 = new Date("1987-05-10");
//12 works as December. If set the same by number, we should use 11.
const dtStr2 = new Date("1987-12-19");
console.log("dtStr1: " + dtStr1);
console.log("dtStr2: " + dtStr2);

console.log("ISO: " + dt.toISOString());
console.log("UTC: " + dt.toUTCString());






