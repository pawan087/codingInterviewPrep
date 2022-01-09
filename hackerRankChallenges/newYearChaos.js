//www.hackerrank.com/challenges/new-year-chaos/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// function minimumBribesNotWorking(q) {
//   let res = 0;

//   for (let i = 0; i < q.length - 1; i++) {
//     let cur = q[i];
//     let nex = q[i + 1];

//     if (cur < nex) continue;

//     let dif = cur - nex;

//     if (dif > 2) {
//       console.log("Too chaotic");
//       return;
//     }

//     res += dif;
//   }

//   console.log(res);

//   return;
// }

function minimumBribes(q) {
  let totalBribes = 0;
  let p1 = 1;
  let p2 = 2;
  let p3 = 3;

  for (let num of q) {
    if (num === p1) {
      // At the start, 1 is 1, 123
      p1 = p2;
      p2 = p3;
      p3++;
      // 234
      continue;
    }

    if (num === p2) {
      // At the start, 2 is in 1s spot, 213
      totalBribes++;
      p2 = p3;
      p3++;
      // 134
      continue;
    }

    if (num === p3) {
      // At the start, 3 is in 1st spot, 312
      totalBribes += 2;
      p3++;
      // 124
      continue;
    }

    if (num !== p1 || num !== p2 || num !== p3) {
      console.log("Too chaotic");
      return;
    }
  }

  console.log(totalBribes);

  return;
}

function minBribesComplicated(q) {
  let res = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    let cur = q[i];

    let x = [1, 2, 5, 3, 7, 8, 6, 4];

    if (cur - (i + 1) > 2) {
      console.log("Too chaotic");

      return;
    }

    for (let j = Math.max(0, cur - 2); j < i; j++) {
      let cur2 = q[j];

      if (cur2 > cur) {
        res++;
      }
    }
  }

  console.log(res);

  return;
}

let queue1 = [1, 2, 3, 5, 4, 6, 7, 8]; // => 1
let queue2 = [4, 1, 2, 3]; // => 'Too chaotic'

let hackerRankInput1 = [2, 1, 5, 3, 4]; // => 3
let hackerRankInput2 = [2, 5, 1, 3, 4]; // => 'Too chaotic'
let hackerRankInput3 = [1, 2, 5, 3, 7, 8, 6, 4]; // => 7

console.log(minBribes(hackerRankInput3));
