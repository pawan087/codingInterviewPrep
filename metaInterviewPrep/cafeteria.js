// Cafeteria
// https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=203188678289677

let N = 10;
let K = 1;
let M = 2;
let S = [2, 6];

// 1 2 3 4 5 6 7 8 9 10
// [   ]   [   ]

function getMaxAdditionalDinersCount(N, K, M, S) {
    let count = 1;
    let arr = new Array(N).fill(0).map(() => [count++, "Open"]);
    let expandCount;

    for (let i = 0; i < arr.length; i++) {
      let subArr = arr[i];
      let num = subArr[0];

      if (S.includes(num)) {
        arr[i][1] = "Taken";
      } else {
        continue;
      }

      expandCount = 0;

      for (let j = i - 1; j >= 0; j--) {
        arr[j][1] = "Closed";
        expandCount++;

        if (expandCount === K) break;
      }

      expandCount = 0;

      for (let j = i + 1; j < arr.length; j++) {
        arr[j][1] = "Closed";
        expandCount++;

        if (expandCount === K) break;
      }
    }

    console.log(arr);

    return;
  }

// function getMaxAdditionalDinersCount(N, K, M, S) {
//   let count = 1;
//   let arr = new Array(N).fill(0).map(() => [count++, "Open"]);
//   let expandCount;

//   for (let i = 0; i < arr.length; i++) {
//     let subArr = arr[i];
//     let num = subArr[0];

//     if (S.includes(num)) {
//       arr[i][1] = "Taken";
//     } else {
//       continue;
//     }

//     expandCount = 0;

//     for (let j = i - 1; j >= 0; j--) {
//       arr[j][1] = "Closed";
//       expandCount++;

//       if (expandCount === K) break;
//     }

//     expandCount = 0;

//     for (let j = i + 1; j < arr.length; j++) {
//       arr[j][1] = "Closed";
//       expandCount++;

//       if (expandCount === K) break;
//     }
//   }

//   let i = 0;
//   let j = 2 * K + 1 - 1;
//   let res = 0;

//   while (j <= arr.length) {
//     let portion = arr.slice(i, j + 1);
//     let mid = Math.floor(portion.length / 2);
//     let leftAllowed = true;
//     let rightAllowed = true;

//     if (portion[mid][1] === "Open") {
//       expandCount = 0;

//       for (let k = mid - 1; k >= 0; k--) {
//         let subArr = portion[k];

//         if (subArr[1] === "Taken" || subArr[1] === "Taken!") {
//           leftAllowed = false;
//           break;
//         }

//         expandCount++;

//         if (expandCount === K) break;
//       }

//       expandCount = 0;

//       for (let k = mid + 1; k < portion.length; k++) {
//         let subArr = portion[k];

//         if (subArr[1] === "Taken" || subArr[1] === "Taken!") {
//           rightAllowed = false;
//           break;
//         }

//         expandCount++;

//         if (expandCount === K) break;
//       }
//     } else {
//       leftAllowed = false;
//       rightAllowed = false;
//     }

//     if (leftAllowed === true && rightAllowed === true) {
//       arr[i + K][1] = "Taken!";

//       res++;
//     }

//     i++;
//     j++;
//   }

//   console.log(arr);

//   return res;
// }

console.log(getMaxAdditionalDinersCount(N, K, M, S));
