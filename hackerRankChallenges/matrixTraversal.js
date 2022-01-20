// Matrix Traversal
// Can choose to start at number in 1st row and reach the last row with most amount of energy left
// Energy starts at 10

let mat = [
  [10, 20, 30, 40],
  [60, 50, 20, 80],
  [10, 10, 10, 10],
  [60, 50, 60, 50],
];

let mat2 = [
  [41, 22, 56, 84],
  [22, 51, 01, 20],
  [05, 07, 18, 19],
  [11, 22, 03, 15],
]; // => 67

let directions = [
  [1, -1], // Down and left
  [1, 0], // Down and same column
  [1, 1], // Down and right
];

function maxEnergy(mat) {
  let energies = [];

  for (let j = 0; j < mat[0].length; j++) {
    let tmp = j;
    let i = 0;
    let energy = 100;

    energy = energy - mat[i][j];

    while (i < mat.length - 1) {
      let choices = grabChoices(mat, i, j);

      if (!choices) continue;

      let min = Infinity;
      let idx = -1;

      for (let k = 0; k < choices.length; k++) {
        let num = choices[k][0];
        let curIdx = choices[k][1];

        if (num < min) {
          min = num;
          idx = curIdx;
        }
      }

      j = idx;
      energy = energy - min;
      i++;
    }

    energies.push(energy);
    j = tmp;
  }

  return Math.max(...energies);
}

function grabChoices(mat, i, j) {
  let arr = [];

  for (let direction of directions) {
    let curCol = direction[1];

    if (curCol + j < 0 || curCol + j >= mat[0].length) {
      continue;
    }

    if (i + 1 === mat.length) return;

    arr.push([mat[i + 1][curCol + j], curCol + j]);
  }

  return arr;
}

console.log(maxEnergy(mat2));
