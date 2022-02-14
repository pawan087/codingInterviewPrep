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

// let combine = function (n, k) {
//   let count = 0;
//   let arr = new Array(n).fill(0).map(() => ++count);
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     let j = i + 1;
//     let subArr = [];
//     let len = arr.length - i;

//     while (subArr.length !== len) {
//       let subSubArr = [arr[i]];

//       if (arr[j] === undefined) {
//         break;
//       }

//       while (subSubArr.length !== k) {
//         subSubArr.push(arr[j]);

//         j++;
//       }

//       subArr.push(subSubArr);
//     }

//     if (subArr.length > 0) {
//       res = [...res, ...subArr];
//     }
//   }

//   return res;
// };

let combineRecursive = function (n, k) {
  // Instantiate results array
  let res = [];

  // Helper function
  let backtrack = function (start, arr) {
    if (arr.length === k) {
      // If the array in formation is the same length as k
      // then stop adding to the array and place the array in formation in into results
      res.push(arr.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      // Start i at 'start' and iterate until it equals n
      // Add into the array the current i
      arr.push(i);

      // Continue adding to array in formation starting with the next index
      // Make sure to pass the array in formation as an arguement
      backtrack(i + 1, arr);

      // Remove the last added item and continue the iteration
      arr.pop();
    }
  };

  // Add into results array by initiating function with start value of 1
  backtrack(1, []);

  return res;
};

function combine(n, k) {
  let frame = new Array(k).fill(0);
  let ans = [];
  let i = 0;

  while (i >= 0) {
    frame[i] += 1;

    if (frame[i] === n + 1) {
      i -= 1;

      continue;
    }

    i += 1;

    if (i === k) {
      i -= 1;
      ans.push(frame.slice());
      continue;
    }

    frame[i] = frame[i - 1];
  }

  return ans;
}

console.log(combine(n1, 3));
