function checkRepeat(arr) {
  for (var i = 1; i < 10; i++) {
    if (arr.indexOf(i) === -1) {
      return false;
    }
  }
  return true;
}

// function checkRow(puzzle) {
//   for (var i = 0; i < puzzle.length; i++) {
//     if (!checkRepeat(puzzle[i])) {
//       return false;
//     }
//     console.log('Row', i, ' is valid')
//   }
//   return true;
// }
//
// function checkCol(puzzle) {
//   var col_arr = []
//   for (var col = 0; col < puzzle.length; col++) {
//     for (var row = 0; row < puzzle[col].length; row++) {
//       col_arr.push(puzzle[row][col])
//     }
//     if (!checkRepeat(col_arr)) {
//       return false
//     }
//     console.log('Col', col, ' is valid')
//     col_arr = []
//   }
//   return true;
// }
//
// function checkQuadrant(puzzle) {
//   var quad_arr = [];
//   var inc = 0
//
//   for (var j = 0; j < 9; j+=3) {
//     for (var i = 0; i < 9; i+= 3) {
//       for (var row = 0+j; row < 3+j; row++) {
//         for (var col = i; col < i+3; col++) {
//           quad_arr.push(puzzle[row][col])
//         }
//       }
//       // console.log(quad_arr)
//       if (!checkRepeat(quad_arr)) {
//         return false
//       }
//       console.log('Quadrant is valid --------')
//       quad_arr = []
//     }
//   }
//
//   if (!checkRepeat(quad_arr)) {
//     return false;
//   }
// }
//
// function sudokuValidator(puzzle) {
//   return checkRow(puzzle) && checkCol(puzzle) &&  checkQuadrant(puzzle)
// }

var puzzle =  [
  [1,2,3,4,5,6,7,8,9],
  [4,5,6,7,8,9,1,2,3],
  [7,8,9,1,2,3,4,5,6],
  [4,5,6,7,8,9,1,2,3],
  [5,6,7,8,9,1,2,3,4],
  [6,7,8,9,1,2,3,4,5],
  [7,8,9,1,2,3,4,5,6],
  [8,9,1,2,3,4,5,6,7],
  [9,1,2,3,4,5,6,7,8],
]

// console.log(sudokuValidator(puzzle))
console.log(checkRepeat(puzzle[0]))
