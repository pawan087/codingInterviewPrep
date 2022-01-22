// Matching Pairs
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=559324704673058&ppid=454615229006519&practice_plan=0

let str1 = "abcd";
let str2 = "adcb";

function matchingPairs(s, t) {
  if (s === t && s.length <= 2) {
    return 0;
  }

  if (s === t && s.length > 2) {
    return s.length - 2;
  }

  let obj = {};

  for (let char of s) {
      obj[char] = true;
  }

  let count = 0;

  for (let char of t) {
      if (obj[char] === true) {
          count++;
      }
  }

  return count;
}

console.log(matchingPairs(str1, str2));
