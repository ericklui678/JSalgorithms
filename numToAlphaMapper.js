//
//
// Given 12258, translate it to a string
// 1: a
// 2: b
// 12: l
// 26: z
//
// abbeh
// aveh
// abyh
// lbeh
// lyh

function convertToAlpha(num) {

  let perm = [];
  num = num.toString().split('');
  let temp = num.slice();

  perm.push(mapper(num));

  for (var i = 0; i < num.length; i++) {
    for (var j = i; j < num.length; j++) {
      let sum = num[j] + num[j+1]
      if (sum <= 26) {
        num[j] = sum;
        num.splice(j+1, 1);
        console.log(num);
        perm.push(mapper(num));
      }
    }
    num = temp.slice();
  }
  return perm;
}

function mapper(num) {
  let map = {
    1: 'a',
    2: 'b',
    5: 'e',
    8: 'h',
    12: 'l',
    22: 'v',
    25: 'y',
  }

  let subStr = '';
  for (var i = 0; i < num.length; i++) {
    subStr += map[num[i]];
  }
  return subStr;
}

let num = 12258;
console.log(convertToAlpha(num));
