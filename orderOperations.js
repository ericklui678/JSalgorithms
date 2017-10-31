function orderOperations(s) {
  s = s.split('+');
  var sum = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i].includes('*')) {
      temp = s[i].split('*');
      sum += Number(temp[0]) * Number(temp[1])
    } else {
      sum += Number(s[i]);
    }
  }
  return sum;
}

var s = "4+6*5+2*7"
console.log(orderOperations(s));
