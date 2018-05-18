// Dynamic Programming / Memoization
// Time: O(n) since you're building array based on n right to left
// Space: O(n) where n is size of array AND n is size of call stack
  // YOU WILL EXCEED CALL STACK WITH THIS IF N IS VERY LARGE

const fibMemo = (n, memo = []) => {
  if (n < 2) return memo[n] = 1;
  if (memo[n]) return memo[n];
  return memo[n] = fibMemo(n-2, memo) + fibMemo(n-1, memo);
};

console.log(fibMemo(100000));

// BOTTOM UP Approach where build array left to right
// Time: O(n) since you're building array based on n
// Space: O(n) where n is length of arr

const fibArr = (n) => {
  if (n < 0) return null;

  let arr = [1,1];
  if (arr[n]) return arr[n];
  for (let i = 0; i < n - 1; i++) {
    arr.push(arr[i] + arr[i+1]);
  }
  return arr[n];
}
console.log(fibArr(100000));
