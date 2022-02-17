// Throttling Gateway

function droppedRequests(requestTime) {
  let res = 0;

  for (let i = 0; i < n; i++) {
    if (i > 2 && requestTime[i] == requestTime[i - 3]) {
      // There were more than 3 signals in the same second mark
      // We check if three signals ago were we still in the same time period

      console.log(requestTime.slice(i - 3, i + 1));
      console.log("\n");

      res++;
    } else if (i > 19 && requestTime[i] - requestTime[i - 20] < 10) {
      // There were 20 signals in less 10 seconds
      // We check 20 signals ago the time difference from the current time period and 20 signals ago time period
      // If that difference is less than 10, that means in less than a ten second time interval, there were 20 signals

      console.log(i);
      console.log(i - 20);
      console.log("requestTime[i]", requestTime[i]);
      console.log("requestTime[i - 20]", requestTime[i - 20]);
      console.log("dif", requestTime[i] - requestTime[i - 20]);
      console.log("\n");

      res++;
    } else if (i > 59 && requestTime[i] - requestTime[i - 60] < 60) {
      // There were 60 signals in less 60 seconds
      // We check 60 signals ago the time difference from the current time period and 60 signals ago time period
      // If that difference is less than 60, that means in less than a 60 second time interval, there were 60 signals

      console.log(i);
      console.log(i - 60);
      console.log("requestTime[i]", requestTime[i]);
      console.log("requestTime[i - 20]", requestTime[i - 60]);
      console.log("dif", requestTime[i] - requestTime[i - 60]);
      console.log("\n");

      res++;
    }
  }

  return res;
}

let n = 27;
let input = [
  1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 11, 11,
  11, 11,
];

// Explanation
// There were 4 signals sent in the 1st second, there are four 1s which violates the rule of more than 3 signals per second, dropped: 1
// In the 2nd second there were 3 more signals sent, total 7
// In the 3rd second there were 3 more signals sent, total 10
// In the 4th second there were 3 more signals sent, total 13
// In the 5th second there were 3 more signals sent, total 16
// In the 6th second there were 3 more signals sent, total 19
// In the 7th second there were 4 more signals sent, which violate not only the 1sec rule but also the 10s rule of not more than 20 signals
// 1 of the 4 signals will be kept and total will reach 20, the 3 remaining will be dropped, dropped: 4
// In the 11th second 4 more signals sent, which violate not only the 1sec rule but also the 10s rule
// 11 minus 10 seconds will be at the 1 second mark, onwards from  the 1 second mark there are 19 signals before the 4 signals sent at the 11 second mark come in
// this means one of the 4 signals will be kept which will total 20 signals in that 10 second interval, and the other three will be dropped, dropped: 7

console.log(droppedRequests(input));
