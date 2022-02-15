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

let combineRecursive = function (n, k) {
  // debugger;
  // Instantiate results array
  let res = [];

  // Helper function
  let backtrack = function (start, arr) {
    // debugger;
    if (arr.length === k) {
      // debugger;
      // If the array in formation is the same length as k
      // then stop adding to the array and place the array in formation in into results
      res.push(arr.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      // debugger;
      // Start i at 'start' and iterate until it equals n
      // Add into the array the current i
      arr.push(i);

      // Continue adding to array in formation starting with the next index
      // Make sure to pass the array in formation as an argument
      backtrack(i + 1, arr);

      // Remove the last added item and continue the iteration
      arr.pop();
    }
  };

  // debugger;

  // Add into results array by initiating function with start value of 1
  backtrack(1, []);

  return res;
};

function combine(n, k) {
  let arr = new Array(k).fill(0);
  let res = [];
  let i = 0;

  while (i >= 0) {
    arr[i] += 1;

    if (arr[i] === n + 1) {
      i -= 1;

      continue;
    }

    i += 1;

    if (i === k) {
      i -= 1;
      res.push(arr.slice());
      continue;
    }

    arr[i] = arr[i - 1];
  }

  return res;
}

// debugger;
console.log(combineRecursive(6, 3));
