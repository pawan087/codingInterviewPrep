// Change in a Foreign Currency
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=2903692913051025&ppid=454615229006519&practice_plan=0

function canGetExactChange(targetMoney, denominations) {
  let arr = new Array(targetMoney + 1).fill(targetMoney + 1);
  arr[0] = 0;

  for (let i = 1; i <= targetMoney; i++) {
    for (let j = 0; j < denominations.length; j++) {
      let curDenomination = denominations[j];
      let curMin = arr[i];

      if (i - curDenomination >= 0) {
        let toAdd = arr[i - curDenomination];
        let numCoins = toAdd + 1; // Using a coin so add one

        if (numCoins < curMin) {
          arr[i] = numCoins;
        }
      }
    }
  }

  // console.log(arr);

  if (arr[targetMoney] === targetMoney + 1) {
    return false;
  } else {
    return true;
  }
}

// Example 1
let denominations1 = [5, 10, 25, 100, 200];
let targetMoney1 = 94;
// let targetMoney1 = 50;
let output1 = false;
// Every denomination is a multiple of 5, so you can't receive exactly 94 units of money in this currency.

// Example 2
let denominations2 = [4, 17, 29];
let targetMoney2 = 75;
let output2 = true;
// You can make 75 units with the denominations [17, 29, 29].

console.log(canGetExactChange(targetMoney2, denominations2));
