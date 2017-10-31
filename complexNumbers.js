function complexNumberMultiply(a, b) {
  let arr1 = a.split('+');
  let arr2 = b.split('+');
  let str = '';
  console.log(arr1, arr2);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // there's no i in a and b
      if (arr1[i].indexOf('i') === -1 && arr2[j].indexOf('i') === -1) {
        str += arr1[i] * arr2[j] + '+';
      } // i exists in a but not b
      else if (arr1[i].indexOf('i') >= 0 && arr2[j].indexOf('i') === -1) {
        str += arr1[i].slice(0, arr1[i].length - 1) * arr2[j] + 'i' + '+';
      }
      // i exists in b but not a
      else if (arr2[j].indexOf('i') >= 0 && arr1[i].indexOf('i') === -1) {
        str += arr2[j].slice(0, arr2[j].length - 1) * arr1[i] + 'i' + '+';
      }
      // i exists in both
      else {
        str += arr1[i].slice(0, arr1[i].length - 1) * arr2[j].slice(0, arr2[j].length - 1) * -1
      }
    }
  }
  console.log(str);
  let expr = str.split('+');
  let dict = {
    'i': 0,
    'num': 0,
  };
  for (let i = 0; i < expr.length; i++) {
    // i does not exist
    if (expr[i].indexOf('i') === -1) {
      dict['num'] += Number(expr[i]);
    } else {
      dict['i'] += Number(expr[i].slice(0, expr[i].length - 1));
    }
  }
  return `${dict['num']}+${dict['i']}i`
}

const a = '10+-20i';
const b = '50+-10i';
console.log(complexNumberMultiply(a, b));
