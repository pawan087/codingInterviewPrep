// Vow to Reverse

function vowToReverse(word) {
  let vowelsArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowels = {};

  for (let vowel of vowelsArr) {
    vowels[vowel] = true;
  }

  let idxArr = [];

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (vowels[char] === true) {
      idxArr.push(i);
    }
  }

  let l = 0;
  let r = idxArr.length - 1;
  let wordArr = word.split("");

  for (let i = 0; i < wordArr.length; i++) {
    if (i === idxArr[l]) {
      wordArr[i] = word[idxArr[r]];

      l++;
      r--;
    }
  }

  return wordArr.join("");
}

let input = "san francisco";

console.log(vowToReverse(input)); // => 'son frincasca'
