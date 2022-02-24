// Selling Products

let ids = [1, 1, 1, 1, 2, 3, 2];
let m = 2;
let output = 2;

let ids2 = [1, 2, 3, 1, 2, 2, 1];
let m2 = 3;
let output2 = 2;

let ids3 = [1, 2, 3, 4];
let m3 = 2;

function findMin(itemCounts) {
  let res = "";
  let min = Infinity;

  for (let key in itemCounts) {
    let val = itemCounts[key];

    if (val < min) {
      min = val;
      res = key;
    }
  }

  return res;
}

function deleteProducts(ids, m) {
  let itemCounts = {};

  for (let id of ids) {
    if (itemCounts[id] === undefined) {
      itemCounts[id] = 1;
    } else {
      itemCounts[id] += 1;
    }
  }

  while (m > 0) {
    let key = findMin(itemCounts);

    if (itemCounts[key] > m) {
      // We're aiming to inspect the element the element that appears the least
      // If we realize that the element that appears the least, appears more than the number toReove
      // Then we essentially break and realize that we are not deleting anything and returning all of them

      m = 0;
      continue;
    }

    if (itemCounts[key] === m) {
      // If we find that the element that appears the least, appears exactly the ammount of times we are to remove
      // Then we deduct from the number to remove and make sure to delete the element since we removed it
      m -= itemCounts[key];

      delete itemCounts[key];

      continue;
    }

    if (itemCounts[key] < m) {
      // If the element that appears the least, appears less than the number of removals
      // then we deduct from the removal count and make sure to remove the element since it is removed
      m -= itemCounts[key];

      delete itemCounts[key];
    }

    // The aim is to continuisly inspect the element that appears the least
  }

  console.log("By removing m items");
  console.log("We have the minimum number of IDs");

  return Object.values(itemCounts).length;
}

console.log(deleteProducts(ids, m));
