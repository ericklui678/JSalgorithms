function reshapeMatrix(nums, r, c) {
  if (!nums.length) return nums;
  if (!nums[0].length) return nums;
  if (!Array.isArray(nums)) return `Entered ${typeof nums}. Must be arr type`;

  let row = nums.length;
  let col = nums[0].length;

  if (r * c !== row * col) return nums;
  if (row === r && col === c) return nums;

  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      newArr.push(nums[i][j]);
    }
  }

  let resArr = [];
  for (let i = 0; i < r; i++) {
    let tempArr = [];
    for (let j = 0; j < c; j++) {
      tempArr.push(newArr[j + (c*i)]);
    }
    resArr.push(tempArr);
  }
  console.log(resArr);
}

const nums = [
  [1,2],
  [3,4],
  [5,6]
];

console.log(reshapeMatrix(nums, 6, 1));
