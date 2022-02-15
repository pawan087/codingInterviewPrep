// LeetCode 46 Permutations (Medium)

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

let permute2 = function (nums) {
  let result = [];
  let temp = [];

  findPermutations(temp, nums, result);

  return result;
};

let findPermutations = (temp, nums, result) => {
  if (nums.length === 0) {
    result.push(temp.slice());

    return;
  }

  for (let i = 0; i < nums.length; i++) {
    let newNum = nums[i];

    temp.push(newNum);
    nums.splice(i, 1);

    findPermutations(temp, nums, result);

    temp.pop();
    nums.splice(i, 0, newNum);
  }
};

let permute3 = function (nums) {
  let res = [];

  let helper = function (visited = new Set(), curPerm = []) {
    if (curPerm.length === nums.length) {
      res.push(curPerm);

      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited.has(i) === false) {
        let argOne = new Set([...visited, i]); // Visited
        let argTwo = [...curPerm, nums[i]]; // curPerm

        helper(argOne, argTwo);
      }
    }
  };

  helper();

  return res;
};

// Example 1:
let nums1 = [1, 2, 3];
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

console.log(permute3(nums1));
