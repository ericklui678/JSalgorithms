const wordBreak = (str, length, result = [], final = []) => {
  const wordDict = {
    a: true,
    an: true,
    and: true,
    pa: true,
    pay: true,
    payment: true,
    payments: true,
    me: true,
    men: true,
    san: true,
    sand: true,
    pay: true,
    pal: true,
    paypal: true
  };
  let prefix = "";

  for (let i = 0; i < str.length; i++) {
    prefix += str[i];
    let suffix = str.substring(i + 1);
    if (prefix in wordDict) {
      result.push(prefix);
      if (result.join("").length === length) {
        final.push(result.slice());
      }
      wordBreak(suffix, length, result, final);
    }
  }
  result.pop();
  return final;
};

const str = "paymentsandpaypal";
const length = str.length;
console.log(wordBreak(str, length));
