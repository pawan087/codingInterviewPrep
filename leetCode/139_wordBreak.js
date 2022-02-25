// Word Break

// https://leetcode.com/problems/word-break/

// var wordBreak = function (str, wordDict) {
//   let obj = {};

//   for (let word of wordDict) {
//     obj[word] = 0;
//   }

//   for (let i = 0; i < str.length; i++) {
//     let j = i + 1;
//     let found = false;

//     while (!found && j <= str.length) {
//       let segment = str.slice(i, j);

//       if (obj[segment] === 0 || obj[segment] === 1) {
//         obj[segment] = 1;
//         break;
//       }

//       j++;
//     }

//     i = j - 1;
//   }

//   for (let key in obj) {
//     let val = obj[key];

//     if (val === 0) return false;
//   }

//   return true;
// };

var wordBreak = function (str, wordDict) {
  // Instantiate a dp initially filled with false
  let dp = new Array(str.length).fill(false);
  // If we reach the end of the str or past the length - 1, then we return true since we know the string can be segmented
  dp[str.length] = true;

  for (let i = str.length - 1; i >= 0; i--) {
    // Iterate backward and segment the string
    for (let word of wordDict) {
      // We're looking to add the length of each word to wherever i currently is
      // if that summation results in an index value past the string then we would be out of bounds and not perform any logic or actions
      let inBounds = i + word.length <= str.length;

      // If we are in bounds then we know that we can potentially find the word
      if (inBounds) {
        // The segment can be found by slicing from i to i plus the length of the word
        let segment = str.slice(i, i + word.length);

        if (segment === word) {
          // If we have a found a segment that matches a word in our wordDict then we know the answer is the value at the current index i plus the length of the word
          dp[i] = dp[i + word.length];
        }

        if (dp[i] === true) {
          // If by chance we are iterating backward and find a word that can be properly segmented since it was in the wordDict, then we can break from this segmentation
          // We do not need to look at the rest of the words if we have found a word that allows us to wordBreak
          break;
        }
      }
    }
  }

  // Return the first value in the dp which was built backward
  return dp[0];
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

console.log(wordBreak(input3, wordDict3));
