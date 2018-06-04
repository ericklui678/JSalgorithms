/*
Given a 2D array, returnrotate the array by 90 degrees clockwise. The function takes two arguments rotate(given_array, n) where n is the num_col or num_rows

Clarifying Questions:
1) Are we assuming that the given array always has equal dimensions?
  - Yes, that is representing by argument n
*/

const rotate2dArrBy90DegreesClockwise = (arr, n) => {
  let rotatedArr = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotatedArr[i][j] = arr[n - j - 1][i];
    }
  }
  return rotatedArr;
};

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotate2dArrBy90DegreesClockwise(arr, 3));
