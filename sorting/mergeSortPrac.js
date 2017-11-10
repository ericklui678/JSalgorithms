function mergeSort(arr) {
  // console.log('newArr', arr);
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  console.log(`merging ${left} ${right}`);
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  console.log('result:', result);
  return result;
}


const arr = [10,9,5,1,2,4,7,8];
console.log(mergeSort(arr));
