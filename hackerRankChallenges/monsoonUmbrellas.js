// Monsoon Umbrellas (exactly like Coin Change from LeetCode)

function getUmbrellas(requirement, sizes) {
  let arr = new Array(requirement + 1).fill(requirement + 1);
  arr[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let size of sizes) {
      if (i - size < 0) {
        continue;
      }

      arr[i] = Math.min(arr[i], arr[i - size] + 1);
    }
  }

  return arr[requirement] === requirement + 1 ? -1 : arr[requirement];
}

let requirement1 = 5;
let sizes1 = [3, 5];
let output1 = 1;

let requirement2 = 8;
let sizes2 = [3, 5];
let output2 = 2;

let requirement3 = 7;
let sizes3 = [3, 5];
let output3 = -1;

let requirement4 = 4;
let sizes4 = [2, 4];
let output4 = 1;

let requirement5 = 1;
let sizes5 = [2];
let output5 = -1;

console.log(getUmbrellas(requirement2, sizes2));
