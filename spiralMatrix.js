// Given m x n matrix, print values in spiral order
// EX: [
//      [1,2,3],
//      [4,5,6],
//      [7,8,9]
//     ]
// returns 1,2,3,6,9,8,7,4,5

const spiralMatrix = (matrix) => {
  if (!matrix.length) return null;

  let minCol = 0;
  let maxCol = matrix[0].length;
  let minRow = 0;
  let maxRow = matrix.length;

  let count = matrix[0].length * matrix.length;

  while (count) {
    for (let i = minCol; i < maxCol; i++) {
      console.log(matrix[minRow][i]);
      count--;
    }
    minRow++;

    for (let i = minRow; i < maxRow; i++) {
      console.log(matrix[i][maxCol - 1]);
      count--;
    }
    maxCol--;

    for (let i = maxCol - 1; i >= minCol; i--) {
      console.log(matrix[maxRow - 1][i]);
      count--
    }
    maxRow--;

    for (let i = maxRow - 1; i >= minRow; i--) {
      console.log(matrix[i][minCol]);
      count--;
    }
    minCol++;
  }
};


const matrix1 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

const matrix2 = [
  [1,2],
  [3,4],
  [5,6],
  [7,8]
];

const matrix3 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

spiralMatrix(matrix3);
