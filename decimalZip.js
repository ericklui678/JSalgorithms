const decimalZip = (num1, num2) => {
  let str1 = String(num1);
  let str2 = String(num2);
  let newStr = '';
  let maxLength = 0;

  str1.length > str2.length ? maxLength = str1.length : maxLength = str2.length;
  for (let i = 0; i < maxLength; i++) {
    if (str1[i]) newStr += str1[i];
    if (str2[i]) newStr += str2[i];
  }
  return newStr;
};

console.log(decimalZip(1234, 567890));
