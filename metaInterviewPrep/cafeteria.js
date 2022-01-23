// Cafeteria
// https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=203188678289677

// let N = 10;
// let K = 1;
// let M = 2;
// let S = [2, 6];

let N = 15
let K = 2
let M = 3
let S = [11, 6, 14]

// 1 2 3 4 5 6 7 8 9 10
// [   ]   [   ]

// [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]
//            *          *        *
//        ^ ^   ^ ^ ^  ^    ^  ^     ^

function getMaxAdditionalDinersCount(N, K, M, S) {
  debugger;
  let seat = 1;
  let availableSeats = 0;
  let delta = 0;

  S.sort((a, b) => a - b);
  // This trick is to count the available seats at the end if they exist
  S.push(N + K + 1);

  S.forEach((diner) => {
    debugger;
    delta = diner - K - seat;
    availableSeats += delta > 0 ? Math.ceil(delta / (K + 1)) : 0;
    seat = diner + K + 1;
  });

  debugger;
  return availableSeats;
}

debugger;
console.log(getMaxAdditionalDinersCount(N, K, M, S));

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
