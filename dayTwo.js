const fs = require("fs");
const data = fs.readFileSync("./day2.txt").toString();
const lines = data.split("\n");
// console.log(lines);

// Rock-Paper-Scissor

const combo = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};
var combos = [];

for (var i = 0; i < lines.length; i++) {
  var sum = combo[lines[i]];
  combos.push(sum);
}

const total = combos.reduce((total, current) => {
  return total + current;
}, 0);
console.log(total);

// A Rock  , B = paper, C = scissor
//  rock X= 1, paper/Y =2, sissor/Z = 3
// if player2  win add 6 to score
// if player2 lose add 0 to score
// if draw add 3 for score for both

//Player two - ME
// AY -  paper (Y + win) - 2 + 6 =8
// BX -  rock (A + lose) - 1 + 0 = 1
// CZ -  scissor (C + draw) - 3 + 3 =6

// AX + BY + AZ
// AX - rock( X + draw) - 1 +3 = 4
// BY - paper( Y + draw ) - 2 + 3 = 5
// AZ -  scissor(Z + lose) - 3 + 0 = 3

// CX - rock(X + win) - 1 + 6 = 7
// CY -  paper(Y + lose) - 2+ 0 = 2
// BZ -  scissor(Z + win) - 3 + 6 = 9

// part Two
// player 1 , player2
// rock rock - draw + X = 4 = AY
// paper rock - lose 1+ 0 = 1 = BX
// scissor rock - win 1 + 6 = 7 = CX

// paper paper - draw + Y = 5 = BY
// rock paper - win + Y = 8 = A
// scissor -

// scissor scissor - draw + Z = 6
// paper
// rock
