function solution(text, sticky) {
  let res = [];
  let strArr = text.split("");
  let obj = {};

  for (let char of sticky) {
    obj[char] = true;

    let upperChar = char.toUpperCase();

    obj[upperChar] = true;
  }

  for (let i = 0; i < strArr.length; i++) {
    let curChar = strArr[i];

    if (curChar === " ") {
      res.push(curChar);
      continue;
    }

    if (obj[curChar] === undefined) {
      res.push(curChar);
      continue;
    }

    if (obj[curChar] === true) {
      res.push(curChar);

      i++;
    }
  }

  return res.join("");
}

let input1 = "Heellllo, thiisss is CCodeeSiggnall!";
let input2 = ["c", "e", "l", "m"];

console.log(solution(input1, input2));
