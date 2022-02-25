// Word Break 2

// https://leetcode.com/problems/word-break-ii/

var wordBreak = function (s, wordDict) {
  // Write code here

  return "Testing";
};

// Example 1:
let s = "catsanddog";
let wordDict = ["cat", "cats", "and", "sand", "dog"];
// ["cats and dog","cat sand dog"]

// Example 2:
let s2 = "pineapplepenapple";
let wordDict2 = ["apple", "pen", "applepen", "pine", "pineapple"];
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.

// Example 3:
let s3 = "catsandog";
let wordDict3 = ["cats", "dog", "sand", "and", "cat"];
// Output: []

console.log(wordBreak(s, wordDict));
