// const trapped = function (heights) {
//   let left = 0;
//   let right = heights.length - 1;
//   maxLeft = 0;
//   maxRight = 0;
//   total = 0;

//   while (left < right) {
//     if (heights[left] <= heights[right]) {
//       if (heights[left] >= maxLeft) {
//         maxLeft = heights[left];
//       } else {
//         total += maxLeft - heights[left];
//       }

//       left++;
//     } else {
//       if (heights[right] >= maxRight) {
//         maxRight = heights[right];
//       } else {
//         total += maxRight - heights[right];
//       }

//       right++;
//     }
//   }

//   return total;
// };

const trapped = function (arr) {
  let i = 0;
  let j = arr.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let curLeftValue;
  let curRightValue;
  let total = 0;

  while (i < j) {
    curLeftValue = arr[i];
    curRightValue = arr[j];

    // Left side's smaller
    if (curLeftValue <= curRightValue) {
      curLeftValue >= maxLeft
        ? (maxLeft = curLeftValue)
        : (total += maxLeft - curLeftValue);

      i++;
    }

    // Right side's smaller
    if (curLeftValue > curRightValue) {
      curRightValue >= maxRight
        ? (maxRight = curRightValue)
        : (total += maxRight - curRightValue);

      j--;
    }
  }

  return total;
};

// let input = [4, 2, 0, 3, 2, 5];
let input = [2,0,2];

console.log(trapped(input));
