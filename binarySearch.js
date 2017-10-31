function binarySearch(val, arr, start = 0, end = arr.length-1) {
  let curr = Math.trunc((end + start)/2);
  if (val === arr[curr]) {
    return true;
  } else if (end < start) {
    return false;
  } else if (val > arr[curr]) {
    console.log('bS(', curr+1, ',', end, ')');
    return binarySearch(val, arr, curr + 1, end);
  } else if (val < arr[curr]) {
    console.log('bS(', 0, ',', curr-1, ')');
    return binarySearch(val, arr, 0, curr - 1);
  }
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(5, arr));
