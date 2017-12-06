const containsDuplicate = arr => {
  if (!arr.length) return false;
  let uniqueNum = {};
  for (num of arr) {
    if (num in uniqueNum) return true;
    uniqueNum[num] = 1;
  }
  return false;
};

const arr = [1,2,3,4,1];
console.log(containsDuplicate(arr));
