// Metro Land Festival

function minimizeCost(numPeople, x, y) {
  let maxX = Math.max(...x);
  let maxY = Math.max(...y);

  let arr = new Array(maxX).fill(0).map(() => new Array(maxY));
  let arrays = [];

  for (let i = 0; i < numPeople.length; i++) {
    for (let i = 0; i < x.length; i++) {
      let blankCopy = arr.slice();

      let xCord = x[i] - 1;
      let yCord = x[i] - 1;

      console.log([xCord, yCord]);
    }
  }

  return "Testing";
}

let directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

function bfs(arr, x, y, lenX, lenY) {
  let que = [[x, y]];

  while (que.length !== 0) {
    let cur = que.shift();

    let val = arr[cur[0]][cur[1]];

    for (let i = 0; i < directions.length; i++) {
      let direction = directions[i];

      let addX = direction[0];
      let addY = direction[1];

      let nexX = cur[0] + addX;
      let nexY = cur[1] + addY;

      if (nexX < 0 || nexX >= lenX || nexY < 0 || nexY >= lenY) {
        continue;
      }

      arr[nexX][nexY] = val++;
    }
  }
}

let numPeople = [1, 2];
let x = [1, 3];
let y = [1, 3];

console.log(minimizeCost(numPeople, x, y));
