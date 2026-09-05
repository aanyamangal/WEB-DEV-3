const crypto = require("crypto");
const fs = require("fs");
const historyFile = "dice-history.txt";
function rollDice() {
    return crypto.randomInt(1, 7);
}

console.log("Dice Generator Started");

for (let i = 1; i <= 5; i++) {

    const dice = rollDice();

    console.log(`Roll ${i}: Dice Rolled: ${dice}`);

    fs.appendFileSync(
        historyFile,
        `Roll ${i}: Dice Rolled: ${dice}\n`
    );
}
console.log("Dice History saved to dice-history.txt");
console.log("Dice Generator Finished");