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

  return res;
}

function counts(teamA, teamB) {
  teamB.sort((a, b) => a - b);
  let b = 0;
  teamA.sort((a, b) => a - b);
  let count = 0;
  let res = [];

  for (let i = 0; i < teamA.length; i++) {
    let numA = teamA[i];
    let numB = teamB[b];

    if (numA <= numB) {
      count++;
    }

    if (numA > numB) {
      b++;
      res.push(count);
      count++;
    }

    if (i === teamA.length - 1) {
      res.push(count);
    }
  }

  return res;
}

let teamA = [1, 4, 2, 4];
let teamB = [3, 5];
// => [2, 4]

console.log(counts(teamA, teamB));

/*

1 2 4 4

*/
