let aScore = 0;
let bScore = 0;
let random;

console.log("Player A");

for (let i = 1; i <= 10; i++) {
    random = Math.floor(Math.random() * 6) + 1;
    console.log("Turn " + i + ": " + random);
    aScore = aScore + random;
}

console.log("\nPlayer B");

for (let i = 1; i <= 10; i++) {
    random = Math.floor(Math.random() * 6) + 1;
    console.log("Turn " + i + ": " + random);
    bScore = bScore + random;
}

// Condition
if (aScore == bScore) {
    aScore = 0;
}

// Final Scores
console.log("\nFinal Score");
console.log("Player A Score = " + aScore);
console.log("Player B Score = " + bScore);

// Winner
if (aScore > bScore) {
    console.log("Winner: Player A");
} else if (bScore > aScore) {
    console.log("Winner: Player B");
} else {
    console.log("Match Draw");
}