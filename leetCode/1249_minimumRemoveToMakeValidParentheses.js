function minRemoveToMakeValid(str) {
  if (!str.length) return "";

  let stack = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (alphabet.includes(char)) continue;

    if (char === "(") stack.push(i);

    if (stack.length && char === ")") {
      stack.pop();
      continue;
    }

    if (!stack.length && char === ")") {
      return minRemoveToMakeValid(str.slice(0, i) + str.slice(i + 1));
    }
  }

  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (stack.includes(i)) {
      continue;
    }

    res.push(str[i]);
  }

  return res.join("");
}

function minRemoveToMakeValid2(str) {
    debugger;
  if (!str.length) return "";

  let stack = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (alphabet.includes(char)) continue;

    if (char === ")" && stack.length === 0) {
      stack.push(i);
      continue;
    }

    if (char === ")" && stack.length > 0) {
      stack.pop();
      continue;
    }

    if (char === "(") {
      stack.push(i);
    }
  }

  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (stack.includes(i)) {
      continue;
    }

    res.push(str[i]);
  }
  return res.join("");
}

let input1 = "lee(t(c)o)de)";
let input2 = "a)b(c)d";
let input3 = "))((";
debugger;
console.log(minRemoveToMakeValid2(input3));
