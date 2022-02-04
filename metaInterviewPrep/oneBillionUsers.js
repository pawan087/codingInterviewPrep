// One Billion Users
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=951929261870357&ppid=454615229006519&practice_plan=0

function growthRateHelper(mid, growthRates) {
  // debugger;

  // Initialize totalUsers to zero since we will summate
  let totalUsers = 0;

  // Set the target with which we will compare our totalUsers for current mid value
  let billion = 1000000000;

  for (let i = 0; i < growthRates.length; i++) {
    // debugger;

    // Add into totalUsers (summate) current growthRate to the power of the current mid
    totalUsers += growthRates[i] ** mid; // Math.pow(growthRates[i], mid);
  }

  // debugger;

  // Return a boolean determining whether the totalUsers summation is equal to or over a billion users
  return totalUsers >= billion;
}

function getBillionUsersDay(growthRates) {
  // debugger;

  // Start to search between 1 and 2000 days
  let low = 1;
  let high = 20000;

  while (low < high) {
    // debugger;

    // While we aren't above the maximum number of days

    // Calculate the mid point between lower and upperbound
    let mid = low + (high - low) / 2; // (high + low) / 2;

    if (growthRateHelper(mid, growthRates)) {
      // debugger;

      // If with mid amount of days we are equal or over one billion users
      // We are looking for the minimum number of days so we test low values of mid
      // Make Mid the upper bound now since we know we have atleast over a billion users at current mid (inclusive)
      high = mid;
    } else {
      // If with current mid amount of days we do not summate to over a billion users
      // Then we know we have to raise our lower bound
      // Set lower bound to mid + 1 since we do not want to include mid since we already know that we aren't able to reach a billion users with this current mid value (exclusive)
      low = mid + 1;
    }
  }

  // debugger;

  // Return low which equates to the most minimum amount of days required to reach at least one billion users
  return Math.floor(low);
}

let growthRates1 = [1.5];
let output1 = 52;

let growthRates2 = [1.1, 1.2, 1.3];
let output2 = 79;

let growthRates3 = [1.01, 1.02];
let output3 = 1047;

// debugger;
console.log(getBillionUsersDay(growthRates2));
