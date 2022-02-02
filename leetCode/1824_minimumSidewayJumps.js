// Minimum Sideway Jumps
// https://leetcode.com/problems/minimum-sideway-jumps/

let obstacles1 = [0, 1, 2, 3, 0]; // 2
let obstacles2 = [0, 1, 1, 3, 3, 0]; // 0
let obstacles3 = [0, 2, 1, 0, 3, 0]; // 2

var minSideJumps = function (obstacles) {
  let course = new Array(3)
    .fill(0)
    .map(() => new Array(obstacles.length).fill("-"));

  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i] === 0) continue;

    course[obstacles[i] - 1][i] = "X";
  }

  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      course[i][0] = 0;
    } else {
      course[i][0] = 1;
    }
  }

  for (let i = 1; i < obstacles.length; i++) {
    let mins = [];

    for (let j = 0; j < 3; j++) {
      let cur = course[j][i];

      if (cur == "-" && course[j][i - 1] !== "X") {
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
    let cur = course[i][obstacles.length - 1];

    res = Math.min(res, cur);
  }

  for (let x of course) {
      console.log(x);
  }

  return res;
};

console.log(minSideJumps(obstacles2));

/*

1, *, -, -, -
0, -, *, -, -
1, -, -, *, -

1, *, -, -, -
0, 0, *, -, -
1, 1, -, *, -

1, *, 2, -, -
0, 0, *, -, -
1, 1, 1, *, -

1, *, 2, 2, -
0, 0, *, 3, -
1, 1, 1, *, -

1, *, 2, 2, 2
0, 0, *, 3, 3
1, 1, 1, *, 3

*/
