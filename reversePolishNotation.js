// Given a string written in Reverse Polish notation, return the correct result
// Input: 512+4*+3-
// Output: 14
// Explanation
  // 5 (1 + 2) 4 * + 3 -
  // 5 3 4 * + 3 -
  // 5 (3 * 4) + 3 -
  // 5 12 + 3 -
  // (5 + 12)  3 -
  // 17 3 -
  // 14

const reversePolishNotation = (expression) => {
  if (!expression) return null;

  let numArr = [];

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];
    // if operator, do operation on last two elements in numArr
    if (isNaN(char)) {
      let num1 = Number(numArr[numArr.length - 1]);
      let num2 = Number(numArr[numArr.length - 2]);

      if (char === '+') num2 += num1;
      else if (char === '-') num2 -= num1;
      else if (char === '/') num2 /= num1;
      else if (char === '*') num2 *= num1;

      numArr[numArr.length - 2] = num2;
      numArr.pop();
    } else { // else if digit, push digit to arr
      numArr.push(char);
    }
  }
  return numArr[0];
};

let expression1 = '512+4*+3-';
let expression2 = '42/'

console.log(reversePolishNotation(expression1));
console.log(reversePolishNotation(expression2));
