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
  let res = [];

  let helper = (cur, rest) => {
    if (rest.length === 0) {
      res.push(cur);

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
