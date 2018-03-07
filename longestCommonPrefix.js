function longestCommonPrefix(strs) {
  strs.sort((a, b) => {
    return a.length - b.length;
  });

  let prefix = '';

  for (var i = 0; i < strs[0].length; i++) {
    for (var j = 0; j < strs.length - 1; j++) {
      console.log(j, i, prefix);
      if (strs[j][i] !== strs[j+1][i]) {
        return prefix;
      }
    }
    prefix += strs[j][i];
  }
  return prefix;
}

let strs = ['hello', 'hey', 'he', 'heh', 'heys'];
console.log(longestCommonPrefix(strs));
