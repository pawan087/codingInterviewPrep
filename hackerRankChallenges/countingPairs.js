let inputArr = [1, 1, 2, 2, 3, 3];
let inputArr2 = [1, 2, 3, 4, 5, 6];
let inputK = 1;
let inputK2 = 2;

function countPairs(arr, k) {
  let res = [];
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      let a = arr[i];
      let b = arr[j];

      let strKey = `${a}${b}`;

      if (set.has(strKey)) continue;

      set.add(strKey);

      if (a + k === b) {
        // console.log(strKey);
        res.push(strKey);
      }
    }
  }
  return res.length;
}

console.log(countPairs(inputArr, inputK));
