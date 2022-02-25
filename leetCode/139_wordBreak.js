// Word Break

// https://leetcode.com/problems/word-break/

var wordBreak = function (str, wordDict) {
  let obj = {};

  for (let word of wordDict) {
    obj[word] = 0;
  }

  for (let i = 0; i < str.length; i++) {
    let j = i + 1;
    let found = false;

    while (!found && j <= str.length) {
      let segment = str.slice(i, j);

      if (obj[segment] === 0 || obj[segment] === 1) {
        obj[segment] = 1;
        break;
      }

      j++;
    }

    i = j - 1;
  }

  for (let key in obj) {
    let val = obj[key];

    if (val === 0) return false;
  }

  return true;
};

// Example 1:
let input = "leetcode";
let wordDict = ["leet", "code"];
let output = true;
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
let input2 = "applepenapple";
let wordDict2 = ["apple", "pen"];
let output2 = true;
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
let input3 = "catsandog";
let wordDict3 = ["cats", "dog", "sand", "and", "cat"];
let output3 = false;

let input4 = 'bb';


console.log(wordBreak(input, wordDict));
