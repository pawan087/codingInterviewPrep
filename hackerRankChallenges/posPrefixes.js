// Positive Prefixes

let maxPosPrefixes = (nums) => {
  let res = -Infinity;

  let helper = (cur, rest) => {
    if (rest.length === 0) {
      let count = 0;
      let sum = 0;
      let sums = [];

      for (let num of cur) {
        sum += num;
        sums.push(sum);
      }

      for (let num of sums) {
        if (num > 0) {
          count++;
        } else {
          count = 0;
        }
      }

      res = Math.max(res, count);

      return;
    }

    for (let i = 0; i < rest.length; i++) {
      let argOne = [...cur, rest[i]]; // Cur
      let argTwo = [...rest.slice(0, i), ...rest.slice(i + 1)]; // Rest

      helper(argOne, argTwo);
    }
  };

  helper([], nums);

  return res;
};

let n = 4;
let input = [-6, 3, 4, 10]; // 3
// [03, 04, -6, -10] Order
// [03, 07, 01, -09] Summation
// Longest sequence of positive integers is 3

let input2 = [-3, 0, 2, 1]; // 3
// [02, 00, 01, -3] Order
// [02, 02, 03, 00] Summation
// Longest sequence of positive integers is 3

let input3 = [-3, 0, -2]; // 0
// [00, -2, -3] Order
// [00, -2, -5] Summation
// Longest seqeuence of positive integers is 0

console.log(maxPosPrefixes(input));
