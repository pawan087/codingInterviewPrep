// LeetCode 46 Permutations (Medium)

// let permute = (nums) => {
//   debugger;
//   let res = [];

//   let helper = (cur, rest) => {
//     debugger;
//     if (rest.length === 0) {
//       debugger;
//       res.push(cur);

//       return;
//     }

//     debugger;
//     for (let i = 0; i < rest.length; i++) {
//       debugger;
//       let argOne = [...cur, rest[i]]; // Cur
//       let argTwo = [...rest.slice(0, i), ...rest.slice(i + 1)]; // Rest

//       debugger;
//       helper(argOne, argTwo);

//       debugger;
//     }
//   };

//   debugger;
//   helper([], nums);

//   debugger;
//   return res;
// };

// let permute2 = function (nums) {
//   debugger;
//   let result = [];
//   let temp = [];

//   debugger;
//   findPermutations(temp, nums, result);

//   debugger;
//   return result;
// };

// let findPermutations = (temp, nums, result) => {
//   debugger;
//   if (nums.length === 0) {
//     debugger;
//     result.push(temp.slice());

//     return;
//   }

//   debugger;
//   for (let i = 0; i < nums.length; i++) {
//     debugger;
//     let newNum = nums[i];

//     temp.push(newNum);
//     nums.splice(i, 1);

//     debugger;
//     findPermutations(temp, nums, result);

//     debugger;
//     temp.pop();
//     nums.splice(i, 0, newNum);
//   }

//   debugger;
// };

// let permute3 = function (nums) {
//   debugger;
//   let res = [];

//   let helper = function (visited = new Set(), curPerm = []) {
//     debugger;
//     if (curPerm.length === nums.length) {
//       debugger;
//       res.push(curPerm);

//       return;
//     }

//     debugger;
//     for (let i = 0; i < nums.length; i++) {
//       debugger;
//       if (visited.has(i) === false) {
//         debugger;
//         let argOne = new Set([...visited, i]); // Visited
//         let argTwo = [...curPerm, nums[i]]; // curPerm

//         debugger;
//         helper(argOne, argTwo);
//         debugger;
//       }
//     }
//   };

//   debugger;
//   helper();

//   debugger;
//   return res;
// };

let permute = (nums) => {
  // Instantiate results array to hold permutation sub-arrays
  let res = [];

  // Helper function used to to fill the results array with the permutation sub-arrays
  let helper = (cur, rest) => {
    // Cur, the first parameter is the current permutation sub-array being built (in process)
    // Rest, the second parameter is the the remaining numbers of the original array not currently being used in Cur (current permutation being built)
    if (rest.length === 0) {
      // If at a point we have used all numbers in the current permutation being built
      // and there are no more remaining numbers to use in the second parameter
      // Then we can go ahead and consider this permutation
      res.push(cur);

      return;
    }

    // If we have variables remaining in the second parameter rest then we iterate through each of the numbers
    // Each number will have it's own decision state tree beneath it
    for (let i = 0; i < rest.length; i++) {
      // Take the current number of the iteration and place that number into the current permutation being built
      let argOne = [...cur, rest[i]]; // Cur
      // Remove the number that is currently being used in the permutation from the remaining numbers to make sure we do not reuse or have duplicates
      // Can consider using a set instead to further optimize
      let argTwo = [...rest.slice(0, i), ...rest.slice(i + 1)]; // Rest

      // Call the helper function on the remaining numbers since we have selected one from the list
      // The further we go down the decision state tree recursively we will eventually be left with no more remaining numbers since we will have used them all
      // At that point we know to consider that sub-array as a permutation
      helper(argOne, argTwo);
    }
  };

  // Initiate the filling of the results array by starting first with an empty array and all the numbers
  helper([], nums);

  return res;
};

// Example 1:
let nums1 = [1, 2, 3,4,5,6,7,8,9,10];
let output1 = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];

// Example 2:
let nums2 = [0, 1];
let output2 = [
  [0, 1],
  [1, 0],
];

// Example 3:
let nums3 = [1];
let output3 = [[1]];

// debugger;
console.log(permute(nums1));
