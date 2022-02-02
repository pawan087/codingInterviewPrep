// Racing Car

function minimumMovement(obstacles) {
  // Setup DP
  let course = new Array(3)
    .fill(0)
    .map(() => new Array(obstacles.length + 1).fill("-"));

  // Fill out starting values
  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      course[i][0] = 0;
    } else {
      course[i][0] = 1;
    }
  }

  // Fill in obstacles
  for (let i = 0; i < obstacles.length; i++) {
    course[obstacles[i] - 1][i + 1] = "X";
  }

  for (let i = 1; i < obstacles.length + 1; i++) {
    let mins = [];

    for (let j = 0; j < 3; j++) {
      let cur = course[j][i];

      if (cur === "-" && course[j][i - 1] !== "X") {
        course[j][i] = course[j][i - 1];
      }
    }

    for (let k = 0; k < 3; k++) {
      let cur = course[k][i];

      if (typeof cur === "number") {
        mins.push(cur);
      }
    }

    let min = Math.min(...mins);

    for (let l = 0; l < 3; l++) {
      if (course[l][i] === "-") {
        course[l][i] = min + 1;
      }
    }
  }

  let res = Infinity;

  for (let i = 0; i < 3; i++) {
    let cur = course[i][obstacles.length - 1 + 1]; // Since the first obstacle doesn't pertain to the starting column

    if (!(typeof cur === "number")) {
      continue;
    }

    res = Math.min(res, cur);
  }

  for (let x of course) {
    console.log(x);
  }

  return res;
}

// let obstacleLanes = [2, 1, 2];
let obstacleLanes = [2, 1, 3, 2];

console.log(minimumMovement(obstacleLanes));
