// Metro Land Festival

let directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function minimizeCost(numPeople, x, y) {
  let maxX = Math.max(...x);
  let maxY = Math.max(...y);

  let matrixes = [];

  for (let i = 0; i < x.length; i++) {
    let copy = new Array(maxX).fill(0).map(() => new Array(maxY).fill(0));

    let xCord = x[i] - 1;
    let yCord = y[i] - 1;
    let multiplier = numPeople[i];

    bfs(copy, xCord, yCord, maxX, maxY, multiplier);
    copy[xCord][yCord] = 0;

    matrixes.push(copy);
  }

  let res = new Array(maxX).fill(0).map(() => new Array(maxY).fill(0));
  let min = Infinity;

  for (let i = 0; i < matrixes.length; i++) {
    let multiplier = numPeople[i];

    for (let j = 0; j < matrixes[i].length; j++) {
      for (let k = 0; k < matrixes[i][j].length; k++) {
        matrixes[i][j][k] *= multiplier;

        res[j][k] += matrixes[i][j][k];
      }
    }
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      min = Math.min(min, res[i][j]);
    }
  }

  return min;
}

function bfs(arr, x, y, maxX, maxY, multiplier) {
  let que = [[x, y]];

  while (que.length !== 0) {
    let cur = que.shift();
    let curX = cur[0];
    let curY = cur[1];

    let val = arr[curX][curY];

    for (let dir of directions) {
      let addToX = dir[0];
      let addToY = dir[1];

      let nexX = curX + addToX;
      let nexY = curY + addToY;

      if (nexX < 0 || nexX >= maxX || nexY < 0 || nexY >= maxY) {
        continue;
      }

      if (arr[nexX][nexY] !== 0) continue;

      arr[nexX][nexY] = val + 1;

      que.push([nexX, nexY]);
    }
  }

  return arr;
}

let numPeople = [1, 2];
let x = [1, 3];
let y = [1, 3];

console.log(minimizeCost(numPeople, x, y));
