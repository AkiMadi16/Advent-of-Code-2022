const fs = require("fs");
const data = fs.readFileSync("./dayThree.txt").toString();
const lines = data.split("\n");
// console.log(lines);

var compartments = [];
var result = [];
for (i = 0; i < lines.length; i++) {
  compartments.push(lines[i].split(" ").toString());

  // console.log(compartments);

  var stringOne = compartments[i].substring(0, compartments[i].length / 2);
  // console.log(stringOne);
  var stringTwo = compartments[i].substring(compartments[i].length / 2);
  // console.log(stringTwo);

  var uniqueLetter = stringOne
    .split("")
    .find((letter) => stringTwo.indexOf(letter) > -1);
  result.push(uniqueLetter);
  // console.log(result);
}
var letterCount = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const total = result.reduce((total, current) => {
  return total + letterCount.indexOf(current) + 1;
}, 0);
console.log(total);
