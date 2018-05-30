//
// Given any array, rotate the numbers n times. n can also be negative which rotates in the other direction
// Ex 1)
//   In: [1,2,3,4,5], n = 3
//   Out: [3,4,5,1,2]
//
// Ex 2)
//   In: [1,2,3,4,5], n = -1
//   Out: [2,3,4,5,1]

const rotateArr = (arr, d) => {
  const reverseArr = (arr, start, end) => {
    let numSwaps = Math.floor((end - start) / 2);
    for (let i = 0; i < numSwaps; i++) {
      [[arr[start + i]], [arr[end - i]]] = [[arr[end - i]], [arr[start + i]]];
    }
    return arr;
  };
  reverseArr(arr, 0, arr.length - 1);
  reverseArr(arr, 0, d - 1);
  reverseArr(arr, d, arr.length - 1);
  return arr;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(rotateArr(arr, 1));
