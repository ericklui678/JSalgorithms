function zeroToBack(arr) {
  if (!Array.isArray(arr)) return `Cannot execute with ${typeof arr} input`;
  if (arr.length < 2) return arr;

  // j keeps track of left most zero while i iterates checks for nonzeroes
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && i !== j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}

let numArr = [0,2,2,5,0,0,0,0,7,3];
console.log(zeroToBack(numArr));

// [2,0,2,5,0,0,0,0,7,3]
// [2,2,0,5,0,0,0,0,7,3]
// [2,2,5,0,0,0,0,0,7,3]
// [2,2,5,7,0,0,0,0,0,3]
// [2,2,5,7,3,0,0,0,0,0]
