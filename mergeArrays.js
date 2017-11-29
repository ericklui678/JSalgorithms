/*
Zip two arrays together
Ex 1)
  In: [1,3,5] [2,4,6]
  Out: [1,2,3,4,5,6]
*/

const mergeTwoArrays = (arr1, arr2) => {
  let combinedArr = [];
  let idx = 0;
  while (combinedArr.length !== arr1.length + arr2.length) {
    arr1[idx] && combinedArr.push(arr1[idx])
    arr2[idx] && combinedArr.push(arr2[idx])
    idx++;
  }
  return combinedArr;
};

const arr1 = [1,3,5,7,9,11];
const arr2 = [2,4,6];
console.log(mergeTwoArrays(arr1, arr2));
