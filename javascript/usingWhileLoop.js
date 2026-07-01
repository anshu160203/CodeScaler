let aScore = 0;
let bScore = 0;
let random;

let turn = 1;
let aTurn = 1;
let bTurn = 1;

while (turn <= 12) {

    random = Math.floor(Math.random() * 6) + 1;

    if (turn % 2 != 0) {
        console.log("Player A - Turn " + aTurn + ": " + random);
        aScore = aScore + random;
        aTurn++;
    } else {
        console.log("Player B - Turn " + bTurn + ": " + random);
        bScore = bScore + random;
        bTurn++;
    }

    turn++;
}

// If both scores are equal
if (aScore == bScore) {
    aScore = 0;
}

// Final Scores
console.log("\nFinal Score");
console.log("Player A = " + aScore);
console.log("Player B = " + bScore);

// Winner
if (aScore > bScore) {
    console.log("Winner: Player A");
} else if (bScore > aScore) {
    console.log("Winner: Player B");
} else {
    console.log("Match Draw");
}