// const lengthOfLongestSubstring = function (s) {
//   if (s.length <= 1) return s.length;

//   const seenChars = {};
//   let left = 0;
//   let longest = 0;

//   for (let right = 0; right < s.length; right++) {
//     const currentChar = s[right];
//     const prevSeenChar = seenChars[currentChar];

//     if (prevSeenChar >= left) {
//       left = prevSeenChar + 1;
//     }

//     seenChars[currentChar] = right;

//     longest = Math.max(longest, right - left + 1);
//   }

//   return longest;
// };

let lengthOfLongestSubstring = function (str) {
  if (str.length <= 1) {
    return str.length;
  }

  let obj = {};
  let i = 0;
  let res = 0;
  let len = 0;

  for (let j = 0; j < str.length; j++) {
    let curChar = str[j];
    let idxPreviouslySeen = obj[curChar];

    if (idxPreviouslySeen >= i) {
      // If from 'i' we have seen again a char we know we have a repeat,
      // so we move 'i' up to where we last saw the repeat plus one.
      i = idxPreviouslySeen + 1;
    }

    obj[curChar] = j;
    len = j - i + 1;
    res = Math.max(res, len);
  }

  return res;
};

let input = "abccabb";

console.log(lengthOfLongestSubstring(input));
