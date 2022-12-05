const fs = require("fs");
const data = fs.readFileSync("./dayFour.txt").toString();
const lines = data.split("\n");
// console.log(lines);

var newArray = [];
for (var i = 0; i < lines.length; i++) {
  var assignments = lines[i].split(",");
  newArray.push(assignments);
}
// console.log(newArray);

const checkPairs = newArray.filter((pair) => {
  const numberArray = pair.map((num) =>
    num.split("-").map((string) => Number(string))
  );
  // console.log(numberArray);
  return (
    (numberArray[0][0] <= numberArray[1][0] &&
      numberArray[0][1] >= numberArray[1][1]) ||
    (numberArray[0][0] >= numberArray[1][0] &&
      numberArray[0][1] <= numberArray[1][1])
  );
});

console.log(checkPairs.length);

//part Two

const checkOverLappingPairs = newArray.filter((pair) => {
  const numberArray = pair.map((num) =>
    num.split("-").map((string) => Number(string))
  );
  console.log(numberArray);
  return (
    numberArray[0][0] <= numberArray[1][1] &&
    numberArray[0][1] >= numberArray[1][0]
  );
});

console.log(checkOverLappingPairs.length);
