// 77. Combinations

// Example 1
let n1 = 4;
let k1 = 2;

let output = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
];

// Example 2
let n2 = 1;
let k2 = 1;

let output2 = [[1]];

let combine = function (n, k) {
  let count = 0;
  let arr = new Array(n).fill(0).map(() => ++count);
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let subArr = [];
    let len = arr.length - i;

    while (subArr.length !== len) {
      let subSubArr = [arr[i]];

      if (arr[j] === undefined) {
        break;
      }

      while (subSubArr.length !== k) {
        subSubArr.push(arr[j]);

        j++;
      }

      subArr.push(subSubArr);
    }

    if (subArr.length > 0) {
      res = [...res, ...subArr];
    }
  }

  return res;
};

console.log(combine(n1, k1));
