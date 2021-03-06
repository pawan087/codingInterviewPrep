function solution(matrix) {
  let res = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let curNum = matrix[i][j];

      if (curNum === 0 || curNum === 2) {
        continue;
      }

      let x = traverseUpLeft(matrix, i, j);
      let y = traverseUpRight(matrix, i, j);
      let z = traverseDownLeft(matrix, i, j);
      let k = traverseDownRight(matrix, i, j);

      res = Math.max(res, x, y, z, k);
    }
  }

  return res;
}

function traverseUpLeft(matrix, i, j) {
  let count = 0;
  let prev;

  while (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
    let curNum = matrix[i][j];

    if (count === 0 && curNum === 1) {
      count++;
    }

    if (count === 1 && curNum === 2) {
      count++;
    }

    if (count >= 2) {
      if (curNum === 2 && prev === 0) {
        count++;
      }

      if (curNum === 0 && prev === 2) {
        count++;
      }
    }

    prev = curNum;
    i--;
    j--;
  }

  return count;
}

function traverseUpRight(matrix, i, j) {
  let count = 0;
  let prev;

  while (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
    let curNum = matrix[i][j];

    if (count === 0 && curNum === 1) {
      count++;
    }

    if (count === 1 && curNum === 2) {
      count++;
    }

    if (count >= 2) {
      if (curNum === 2 && prev === 0) {
        count++;
      }

      if (curNum === 0 && prev === 2) {
        count++;
      }
    }

    prev = curNum;
    i--;
    j++;
  }

  return count;
}

function traverseDownLeft(matrix, i, j) {
  let count = 0;
  let prev;

  while (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
    let curNum = matrix[i][j];

    if (count === 0 && curNum === 1) {
      count++;
    }

    if (count === 1 && curNum === 2) {
      count++;
    }

    if (count >= 2) {
      if (curNum === 2 && prev === 0) {
        count++;
      }

      if (curNum === 0 && prev === 2) {
        count++;
      }
    }

    prev = curNum;
    i++;
    j--;
  }

  return count;
}

function traverseDownRight(matrix, i, j) {
  let count = 0;
  let prev;

  while (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
    let curNum = matrix[i][j];

    if (count === 0 && curNum === 1) {
      count++;
    }

    if (count === 1 && curNum === 2) {
      count++;
    }

    if (count >= 2) {
      if (curNum === 2 && prev === 0) {
        count++;
      }

      if (curNum === 0 && prev === 2) {
        count++;
      }
    }

    prev = curNum;
    i++;
    j++;
  }

  return count;
}

let matrix1 = [
  [0, 0, 1, 2],
  [0, 2, 2, 2],
  [2, 1, 0, 1],
];

let matrix2 = [
  [2, 1, 2, 2, 0],
  [0, 2, 0, 2, 2],
  [0, 0, 0, 0, 0],
  [0, 0, 2, 2, 2],
  [2, 1, 0, 2, 1],
  [2, 2, 0, 0, 2],
];

console.log(solution(matrix1));
// console.log(traverseUpRight(matrix2, 4, 1));
