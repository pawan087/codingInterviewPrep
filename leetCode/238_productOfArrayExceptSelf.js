// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

let nums1 = [1, 2, 3, 4];
let output1 = [24, 12, 8, 6];

let nums2 = [-1, 1, 0, -3, 3];
let outpu2 = [0, 0, 9, 0, 0];

var productExceptSelfBruteForce = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      product *= nums[j];
    }

    arr.push(product);
  }

  return arr;
};

var productExceptSelf = function (nums) {
  let arr = [];
  let prefix = [];
  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i];
  }

  let postfix = new Array(prefix.length);
  postfix[postfix.length - 1] = nums[nums.length - 1];

  for (let i = nums.length - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    let pre = prefix[i - 1];
    let post = postfix[i + 1];

    if (pre === undefined) {
      arr[i] = post;
    } else if (post === undefined) {
      arr[i] = pre;
    } else {
      arr[i] = post * pre;
    }
  }

  console.log("Prefix");
  console.log(prefix);
  console.log("\nPostfix");
  console.log(postfix);
  console.log("\nResult");

  return arr;
};

console.log(productExceptSelf(nums1));
