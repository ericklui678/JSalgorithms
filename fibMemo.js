const fib = (n, memo = [0, 1]) => {
  if (n < 2 || memo[n]) return memo[n];
  memo.push(fib(n-1, memo) + fib(n-2, memo));
  return memo[n];
};

console.log(fib(1000));
