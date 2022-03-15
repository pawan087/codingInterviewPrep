// Group Anagrams

function getGroupedAnagrams(words) {
  let obj = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let sorted = word.split("").sort().join("");

    if (obj[sorted] === undefined) {
      obj[sorted] = 1;
    } else {
      obj[sorted]++;
    }
  }
  
  return Object.keys(obj).length;
}

let words = ["inch", "cat", "chin", "kit", "act"];

console.log(getGroupedAnagrams(words));
