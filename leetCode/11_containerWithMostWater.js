// area = min(a, b) x (idxB - idxA)

// function getMaxWaterContainer(arr) {
//   let p1 = 0;
//   let p2 = arr.length - 1;
//   let maxArea = 0;

//   while (p1 < p2) {
//     let height = Math.min(arr[p1], arr[p2]);
//     let width = p2 - p1;
//     let area = height * width;

//     maxArea = Math.max(maxArea, area);

//     if (arr[p1] <= arr[p2]) {
//       p1++;
//     } else {
//       p2--;
//     }
//   }

//   return maxArea;
// }

const getMaxWaterContainer = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let minHeight = 0;
  let distance = 0;
  let greatestArea = 0;

  while (i < j) {
    let leftNum = arr[i];
    let rightNum = arr[j];

    // area is width x height and only the the minimum height matters
    if (leftNum <= rightNum) {
      minHeight = leftNum;
    } else {
      minHeight = rightNum;
    }

    // width is the distance between i and j
    distance = j - i;

    if (minHeight * distance > greatestArea) {
      greatestArea = minHeight * distance;
    }

    if (leftNum <= rightNum) {
      i++;
    } else {
      j--;
    }
  }

  return greatestArea;
};

let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let heights = [1, 1];

console.log(getMaxWaterContainer(heights));
