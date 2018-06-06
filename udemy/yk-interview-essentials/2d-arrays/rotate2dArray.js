/*
Given a 2D array, returnrotate the array by 90 degrees clockwise. The function takes two arguments rotate(given_array, n) where n is the num_col or num_rows

Clarifying Questions:
1) Are we assuming that the given array always has equal dimensions?
  - Yes, that is representing by argument n

Logic:
1) Figure out what is happening with the indicies before and after rotate

*/

const rotate2dArrBy90DegreesClockwise = (arr, n) => {
  let rotatedArr = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  console.log(rotatedArr);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
      rotatedArr[i][j] = arr[n - j - 1][i];
    }
  }
  return rotatedArr;
};

const rotate2dArrInplace = (arr, n) => {
  // define helper function that returns new idx position of curr position
  // EX: 0 0 -> 0 3
  //  0 1 -> 1 3
  // 1 0 -> 0 2
  // 1 1 -> 1 2
  const rotate_sub = (i, j, n) => {
    return [j, n - i - 1];
  };

  for (let i = 0; i <= Math.floor(n / 2 - 1); i++) {
    for (let j = 0; j <= Math.ceil(n / 2 - 1); j++) {
      // create temp array of four items since you are segementing
      // original array into 4 smaller sub arrays
      // you'll use temp array to save original 4 values before replacing
      let temp = [-1, -1, -1, -1];
      let [curr_i, curr_j] = [i, j];
      // for loop to save 4 original values in temp
      for (let k = 0; k <= 3; k++) {
        temp[k] = arr[curr_i][curr_j];
        [curr_i, curr_j] = rotate_sub(curr_i, curr_j, n);
      }
      // for loop to overwrite original array's 4 values based on temp's
      // previous index
      for (let k = 0; k <= 3; k++) {
        arr[curr_i][curr_j] = temp[(k + 3) % 4];
        [curr_i, curr_j] = rotate_sub(curr_i, curr_j, n);
      }
    }
  }
  return arr;
};

const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// console.log(rotate2dArrBy90DegreesClockwise(arr, 4));

console.log(rotate2dArrInplace(arr, 4));
