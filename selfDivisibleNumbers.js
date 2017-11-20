const findAllSelfDividingNum = (left, right) => {
  let result = [];
  for (let num = left; num <= right; num++) {
    if (checkSelfDividingNum(num)) result.push(num);
  }
  return result;
};

const checkSelfDividingNum = (num) => {
  if (num < 10) return true;

  let digits = [];
  let temp = num;
  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  for (let i = 0; i < digits.length; i++) {
    if (num % digits[i] !== 0) return false;
  }
  return true;
};

console.log(findAllSelfDividingNum(1, 22));
