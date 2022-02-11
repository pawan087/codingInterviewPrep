// Positive Prefixes

function maxPosPrefixes(arr) {
  let perms = permute(arr);

  let res = 0;

  for (let arr of perms) {
    let count = 0;
    let sum = 0;
    let sums = [];

    for (let num of arr) {
      sum += num;
      sums.push(sum);
    }

    for (let num of sums) {
      if (num > 0) {
        count++;
      }
    }

    res = Math.max(count, res);
  }

  return res;
}

function permute(nums) {
  let result = [];

  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = permute(remainingNums);

    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);

      result.push(permutedArray);
    }
  }

  return result;
}

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

console.log(maxPosPrefixes(input2));
