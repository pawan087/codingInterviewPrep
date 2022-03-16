// Reach the End in Time

function reachTheEnd(grid, maxTime) {
  let arr = [];

  for (let str of grid) {
    arr.push(str.split(""));
  }

  arr[0][0] = 0;

  bfs(arr, arr[0].length, arr.length);

  return Number(arr[arr.length - 1][arr[0].length - 1]) <= maxTime
    ? "Yes"
    : "No";
}

let directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

function bfs(arr, yLen, xLen) {
  let que = [[0, 0]];

  while (que.length !== 0) {
    let cur = que.shift();
    let x = cur[0];
    let y = cur[1];

    let val = arr[x][y];

    for (let direction of directions) {
      let xToAdd = direction[0];
      let yToAdd = direction[1];

      let nexX = x + xToAdd;
      let nexY = y + yToAdd;

      if (nexX < 0 || nexY < 0 || nexX >= xLen || nexY >= yLen) {
        continue;
      }

      if (arr[nexX][nexY] !== ".") {
        continue;
      }

      arr[nexX][nexY] = val + 1;

      que.push([nexX, nexY]);

      //   print(arr);
      //   console.log("\n");
    }
  }
}

function print(arr) {
  for (let subArr of arr) {
    let x = JSON.stringify(subArr);

    console.log(x);
  }
}

let rows = 3;
let grid = ["..##", "#.##", "#..."];
let maxTime = 5;

// Return 'Yes' or 'No';

console.log(reachTheEnd(grid, maxTime));
