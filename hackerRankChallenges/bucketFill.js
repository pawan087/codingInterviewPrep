// Bucket Fill

function strokesRequired(picture) {
  let arr = [];

  let seen = new Array(picture.length)
    .fill(0)
    .map(() => new Array(picture[0].length).fill(false));

  for (let str of picture) {
    let row = str.split("");

    arr.push(row);
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (seen[i][j] !== true) {
        dfs(arr, seen, i, j, arr[i][j]);
        count++;
      }
    }
  }

  return count;
}

function dfs(arr, seen, i, j, curChar) {
  if (seen[i][j] === true) {
    return;
  }

  seen[i][j] = true;

  for (let direction of directions) {
    let curI = direction[0];
    let curJ = direction[1];
    let nexI = curI + i;
    let nexJ = curJ + j;

    if (nexI >= 0 && nexI < arr.length && nexJ >= 0 && nexJ < arr[0].length) {
      if (arr[nexI][nexJ] !== curChar) {
        continue;
      }

      dfs(arr, seen, nexI, nexJ, curChar);
    }
  }

  return seen;
}

let directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let picture = ["aabba", "aabba", "aaacb"];

console.log(strokesRequired(picture));
