let input = [
  [7, 7],
  [2, 3],
  [6, 11],
  [1, 2],
];

let output = [
  [1, 3],
  [6, 11],
];

// Examples:
// 4,8 - 2,6 - 5,7 => 2,8
// 6,9 - 2,3 - 9,11, - 1,5 - 14,18 => 1,5 - 6,11 - 14,18

let getMergedIntervals = (twoDeeArr) => {
  return twoDeeArr.sort().map(x => x.join(' ')).join('\n') + '\n';
};

console.log(getMergedIntervals(input));
