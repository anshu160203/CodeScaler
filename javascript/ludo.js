// Random Number Generator (1-6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let playerA = [];
let playerB = [];

let scoreA = 0;
let scoreB = 0;

// Player A - 6 Turns
console.log("Player A Turns:");
for (let i = 1; i <= 6; i++) {
    let roll = rollDice();
    playerA.push(roll);
    scoreA += roll;
    console.log("Turn " + i + ": " + roll);
}

// Player B - 6 Turns
console.log("\nPlayer B Turns:");
for (let i = 1; i <= 6; i++) {
    let roll = rollDice();
    playerB.push(roll);
    scoreB += roll;
    console.log("Turn " + i + ": " + roll);
}

// Condition
if (scoreA === scoreB) {
    scoreA = 0;
}

// Final Result
console.log("\n------ Final Result ------");
console.log("Player A Rolls:", playerA);
console.log("Player B Rolls:", playerB);

console.log("Player A Score:", scoreA);
console.log("Player B Score:", scoreB);

if (scoreA > scoreB) {
    console.log("Winner: Player A");
} else if (scoreB > scoreA) {
    console.log("Winner: Player B");
} else {
    console.log("Match Draw");
}