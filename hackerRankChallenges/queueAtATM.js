// Queue at ATM

function getFinalOrder(k, amount) {
  let obj = {};

  for (let i = 1; i <= amount.length; i++) {
    obj[i] = amount[i - 1];
  }

  let res = [];

  while (Object.keys(obj).length > 0) {
    for (let key in obj) {
      let val = obj[key];

      val = val - k;

      obj[key] = val;

      if (val <= 0) {
        res.push(Number(key));

        delete obj[key];
      }
    }
  }

  return res;
}

let k = 2;
let n = 3;
let input = [2, 5, 1]; // [1, 3, 2]

let k2 = 3;
let n2 = 3;
let input2 = [1, 3, 2]; // [1, 3, 2]

let k3 = 2;
let n3 = 6;
let input3 = [6, 1, 2, 3, 2, 7]; // [2, 3, 5, 4, 1, 6]

console.log(getFinalOrder(k, input));
