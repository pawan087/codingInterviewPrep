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
let output = "";

/*

Explanation:
1) Remove 3 'e' => "aabbccdddcba"
2) Remove 3 'd' => "aabbcccba"
3) Remove 3 'c' => "aabbba"
4) Remove 3 'b' => "aaa"
5) Remove 3 'a' => ""

*/

let input4 = "aaabbbacd";
let output = "acd";

/*

Explanation:
1) Remove 3 'b' => "aaaacd"
2) Remove 4 'a' => "cd"

*/

function candyCrush(str) {
  let res = "";

  return "Testing";
}

console.log(candyCrush(input1));
