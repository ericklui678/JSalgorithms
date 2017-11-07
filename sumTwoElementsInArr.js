const sumTwoElementsInArr = (arr, k) => {
  let numMap = {};

  for (let i = 0; i < arr.length; i++) {
    let dif = k - arr[i];
    if (dif in numMap) return true;
    numMap[arr[i]] = 0;
  }
  return false;
};

const arr = [5,3,6,2,4,7];
const k = 10;
console.log(sumTwoElementsInArr(arr, k));
