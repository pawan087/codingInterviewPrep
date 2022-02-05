// Jump Game II
// https://leetcode.com/problems/jump-game-ii/

// Example 1:
let nums1 = [2, 3, 1, 1, 4];
let output1 = 2;
// Explanation: The minimum number of jumps to reach the last index is 2
// Jump 1 step from index 0 to 1, then 3 steps to the last index

var jump = function (nums) {
  let arr = new Array(nums.length).fill(Infinity);
  arr[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    for (let j = i + 1; j <= i + num; j++) {
      if (arr[j] === undefined) continue;

      arr[j] = Math.min(arr[j], arr[i] + 1);
    }
  }

  return arr[arr.length - 1];
};

console.log(jump(nums1));
