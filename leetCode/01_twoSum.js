function twoSum(arr, target) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const idx = obj[arr[i]];

    if (idx >= 0) {
      return [idx, i];
    }

    const numToFind = target - arr[i];

    obj[numToFind] = i;
  }

  return null;
}

let nums = [1, 3, 7, 9, 2];

console.log(twoSum(nums, 11));
