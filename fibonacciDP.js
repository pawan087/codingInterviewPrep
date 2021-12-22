function fibonacciDP() { // O(n)
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);

      return cache[n];
    }
  };
}
