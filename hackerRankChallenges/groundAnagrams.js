// Can sort word then sort entire array and find groups but complicated, rather store in hashmap the sorted word for frequency, idx etc.

let input = ["cat", "listen", "silent", "kitten", "salient"];

function groupAnagrams(words) {
  let obj = {};

  for (let word of words) {
    let arrWord = word.split("");
    let sortedStr = arrWord.sort().join("");
    if (obj[sortedStr] === undefined) {
      obj[sortedStr] = 1;
    } else {
      obj[sortedStr]++;
    }
  }

  return Object.values(obj).length;
}

console.log(groupAnagrams(input));
