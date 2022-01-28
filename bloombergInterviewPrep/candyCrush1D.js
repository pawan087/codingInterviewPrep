// Candy Crush 1D

// https://leetcode.com/discuss/interview-question/380650/bloomberg-phone-candy-crush-1d

let input1 = "aaabbbc";
let outpu1 = "c";

/*

Explaination

1) Remove 3 'a' => 'bbbc'
2) Remove 4 'b' => 'c'

*/

let input2 = "aabbbacd";
let output2 = "cd";

/*

Explaination

1) Remove 3 'b' => 'aaacd'
2) Remove 3 'a' => 'cd'

*/

let input3 = "aabbccddeeedcba";
let output3 = "";

/*

Explanation:
1) Remove 3 'e' => "aabbccdddcba"
2) Remove 3 'd' => "aabbcccba"
3) Remove 3 'c' => "aabbba"
4) Remove 3 'b' => "aaa"
5) Remove 3 'a' => ""

*/

let input4 = "aaabbbacd";
let output4 = "acd";

/*

Explanation:
1) Remove 3 'b' => "aaaacd"
2) Remove 4 'a' => "cd"

*/

function candyCrush(str) {
  let toDo = true;

  while (toDo === true) {
    let strArr = str.split("");
    toDo = false;

    for (let i = 0; i < strArr.length; i++) {
      let cur = strArr[i];
      let nex = strArr[i + 1];
      let nexNex = strArr[i + 2];

      if (nex === undefined) {
        break;
      }

      if (cur === nex && nex === nexNex) {
        toDo = true;

        strArr[i] = "-" + strArr[i];
        strArr[i + 1] = "-" + strArr[i + 1];
        strArr[i + 2] = "-" + strArr[i + 2];
      }
    }

    let trimmedArr = [];

    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i][0] === "-") {
        continue;
      } else {
        trimmedArr.push(strArr[i]);
      }
    }

    str = trimmedArr.join("");
  }

  return str;
}

console.log(candyCrush(input4));
