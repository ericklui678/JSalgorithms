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
    paypal: true
  };
  let prefix = "";

  for (let i = 0; i < str.length; i++) {
    prefix += str[i];
    let suffix = str.substring(i + 1);
    if (prefix in wordDict) {
      result.push(prefix);
      if (result.join("").length === length) {
        // console.log(result);
        final.push(result.slice());
        // console.log(result, str.length, str, prefix, suffix);
      }
      wordBreak(suffix, length, result, final);
      // console.log("final", final);
    }
  }
  result.pop();
  return final;
};

const str = "paymentsandpaypal";
const length = str.length;
console.log(wordBreak(str, length));
