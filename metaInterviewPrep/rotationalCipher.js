// Rotational Cipher
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=238827593802550&ppid=454615229006519&practice_plan=1

function rotateNum(num, howMuch) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return String(arr[(num + howMuch) % arr.length]);
}

function rotateAlpha(char, howMuch) {
  let arr1 = "abcdefghijklmnopqrstuvwxyz".split("");
  let arr2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let idx1 = arr1.indexOf(char);
  let idx2 = arr2.indexOf(char);

  if (idx1 === -1) {
    return arr2[(idx2 + howMuch) % arr2.length];
  }

  if (idx2 === -1) {
    return arr1[(idx1 + howMuch) % arr1.length];
  }
}

function rotationalCipher(input, rotationFactor) {
  let res = new Array(0);
  let inputArr = input.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";

  for (let char of inputArr) {
    let newChar;

    if (alphabet.indexOf(char) !== -1) {
      newChar = rotateAlpha(char, rotationFactor);
    } else if (numbers.indexOf(char) !== -1) {
      newChar = rotateNum(Number(char), rotationFactor);
    } else {
      res.push(char);
      continue;
    }

    res.push(newChar);
  }

  return res.join("");
}

console.log(rotationalCipher("Zebra-493", 3));
