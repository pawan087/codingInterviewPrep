// Revenue Milestones

// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=192049171861831&ppid=454615229006519&practice_plan=0

function getMilestoneDays(revenues, milestones) {
  let summations = [];
  let sum = 0;

  for (let num of revenues) {
    sum += num;
    summations.push(sum);
  }

  // console.log(JSON.stringify(summations));

  let res = [];

  for (let milestone of milestones) {
    res.push(binarySearch(summations, milestone));
  }

  return res;
}

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // let leftNum = arr[left];
    // let rightNum = arr[right];

    let mid = Math.floor((left + right) / 2);
    let midNum = arr[mid];

    if (midNum >= num) {
      right = mid - 1;
      continue;
    }

    if (midNum < num) {
      left = mid + 1;
      continue;
    }
  }

  // console.log(left + 1);

  return left + 1;
}

let revenues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let milestones = [100, 200, 500];
let output = [4, 6, 10];

console.log(getMilestoneDays(revenues, milestones));
