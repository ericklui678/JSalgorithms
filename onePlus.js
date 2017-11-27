/*
Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

Ex 1)
  In: [1,2,3]
  Out: [1,2,4]

Ex 2)
  In: [2,9,9]
  Out: [3,0,0]

Ex 3)
  In: [9,9,9]
  Out: [1,0,0,0]
*/

const onePlusDigits = digits => {
  if (!digits.length) return 'array must be non-empty';

  for (let i = digits.length - 1; i >= 0; i--) {
    let currNum = digits[i];
    if (currNum < 9) {
      digits[i]++;
      break;
    }
    digits[i] = 0;
    if (i === 0) {
      digits.unshift(1);
    }
  }
  return digits;
};

const case1 = [1,2,8];
const case2 = [2,9,9];
const case3 = [9,9,9];

console.log(onePlusDigits(case1));
console.log(onePlusDigits(case2));
console.log(onePlusDigits(case3));
