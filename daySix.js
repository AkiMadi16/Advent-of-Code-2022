const fs = require("fs");
const data = fs.readFileSync("./daySix.txt").toString();
const lines = data.split("");

// console.log(lines);

// let marker = "";
// for (var i = 3; i < lines.length; i++) {
//   const set = new Set();
//   set.add(lines[i]);
//   set.add(lines[i - 1]);
//   set.add(lines[i - 2]);
//   set.add(lines[i - 3]);
//   // console.log(set.size);
//   if (set.size === 4) {
//     marker = i + 1;
//     break;
//   }
// }
// console.log(marker);
//mjqjpqmgbljsphdztnvjfqwrcgsmlb
//first we check iterating first 4 letters mjqj
// then we check jqjp, next qjpq
// jpqm is a unique value set
// we check set.size to check unique set
// we now need to find the first unique set of 4
// if we get unique set of markers then we break the loop
// so the marker needs to be i + 1
// we declare a variable marker to find our marker

//part two
function getMarker(uniquesetsize) {
  let marker = "";
  for (var i = uniquesetsize - 1; i < lines.length; i++) {
    const set = new Set();
    for (var j = 0; j < uniquesetsize; j++) {
      set.add(lines[i - j]);
    }
    // console.log(set.size);
    if (set.size === uniquesetsize) {
      marker = i + 1;
      break;
    }
  }
  return marker;
}
console.log(getMarker(14));
