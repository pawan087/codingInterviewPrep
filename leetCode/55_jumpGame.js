// Jump Game
// https://leetcode.com/problems/jump-game/

let nums1 = [2, 3, 1, 1, 4]; // True
let nums2 = [3, 2, 1, 0, 4]; // False

let canJump = function (nums) {
  // Establish the goal originally at the very end, where we are attempting to reach
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    // Iterate backward starting from second to last number
    let num = nums[i];

    if (i + num >= goal) {
      // If from the current number, we can jump to at least the current goal
      // Then we bring down the goal to the current position
      // If we can jump to the gaol from the current position then the current position is the new goal
      goal = i;
    }
  }

  // If at the end of the loop our goal has not been brought to the front of the array
  // Then we know the goal is not achievable, so we return false
  return goal === 0 ? true : false;
};

console.log(canJump(nums1));
