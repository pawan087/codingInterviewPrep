// Football Scores

function countsSlow(teamA, teamB) {
  let obj = {};

  for (let num of teamA) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  let res = [];

  for (let num of teamB) {
    let count = 0;

    for (let i = num; i >= 1; i--) {
      if (obj[i]) {
        count += obj[i];
      }
    }

    res.push(count);
  }

  // teamA.sort((a, b) => a - b);

  // console.log(teamA);

  return res;
}

function counts(teamA, teamB) {
  teamA.sort((a, b) => a - b);

  let res = [];

  console.log("teamA", teamA);

  for (let i = 0; i < teamB.length; i++) {
    let numB = teamB[i];

    let l = 0;
    let r = teamA.length;
    let count;

    while (l < r) {
      let mid = Math.floor((l + r) / 2);
      let numA = teamA[mid];

      if (numA > numB) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }

    if (l === r) {
      res.push(l);
    } else {
      res.push(mid);
    }
  }

  return res;
}

let teamA1 = [1, 4, 2, 4];
let teamB1 = [3, 5];
// => [2, 4]

let teamA2 = [2, 10, 5, 4, 8];
// [ 2, 4, 5, 8, 10 ]
let teamB2 = [3, 1, 7, 8];
// => [1,0,3,4]

console.log(counts(teamA2, teamB2));
