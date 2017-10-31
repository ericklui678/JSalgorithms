function countBits(num) {
  if (!num) return [0];

  let result = [0];
  for (let i = 1; i <= num; i++) {
    let binStr = decToBin(i);
    let count = 0;
    for (let j = 0; j < binStr.length; j++) {
      if (binStr[j] === '1') count++;
    }
    result.push(count);
    count = 0;
  }
  return result;
}

function decToBin(num) {
  let str = '';
  while (num !== 0) {
    let remainder = num % 2;
    num = Math.trunc(num / 2);
    str = remainder + str;
  }
  return str;
}

console.log(countBits(5));
