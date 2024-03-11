//using Map
const matchTime1 = new Map();
matchTime1.set("football", 90);
matchTime1.set("basketball", 48);
matchTime1.set("hockey", 60);

console.log("has football: " + matchTime1.has("football"));
console.log("Duration: " + matchTime1.get("basketball"));

//using Object
const matchTime2 = {};
matchTime2["football"] = 90;
matchTime2["basketball"] = 48;
matchTime2["hockey"] = 60;

console.log("has football: " + (matchTime2["football"] !== undefined));
console.log("Duration: " + matchTime2["basketball"]);