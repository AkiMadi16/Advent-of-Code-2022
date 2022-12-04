const fs = require("fs");
const fileName = process.argv[2];

const data = fs.readFileSync(fileName).toString();
const lines = data.split("\n\n");
// console.log(lines)

var elves = [];

for (i = 0; i < lines.length; i++) {
  var calories = lines[i].split("\n");
  var sum = calories.reduce((total, current) => {
    return total + parseInt(current);
  }, 0);
  elves.push(sum);
}
console.log(elves);

const max = elves.sort((a, b) => b - a);
console.log(max[0]);

console.log(max[0] + max[1] + max[2]);
