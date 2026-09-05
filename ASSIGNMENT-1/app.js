const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Application Started")

console.log("Checking numbers:");

console.log("10 is even:", isEven(10));
console.log("21 is even:", isEven(21));
console.log("24 is even:", isEven(24));

logger("Application Finished");