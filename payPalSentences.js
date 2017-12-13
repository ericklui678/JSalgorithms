/*
Given the string 'paymentsandpaypal' and a dictionary of predefined valid words, find all possible valid sentences. Valid sentences are defined as valid words separated by other valid words.

EX:
'paymentsandpaypal' returns

'Payment sand Pay Pal'
'Payment sand PayPal'
'Payments and Pay Pal'
'Payments and PayPal'
*/

const possibleSentences = (str, result = []) => {
  // const wordDict = {
  //   'pay': 1,
  //   'paypal': 1,
  //   'pal': 1,
  // };
  const wordDict = {
    'a': 1,
    'an': 1,
    'and': 1,
    'men': 1,
    'pa': 1,
    'pal': 1,
    'pay': 1,
    'paypal': 1,
    'payment': 1,
    'payments': 1,
    'sand': 1,
  };
  for (let i = 0; i < str.length; i++) {
    let substr = str.substr(0, str.length - i);
  //   // console.log(substr);
  //   if (substr in wordDict) {
  //     let remainingStr = str.substr(substr.length);
  //     if (!remainingStr) {
  //       result.push([substr]);
  //       console.log('result', result);
  //     }
  //     console.log(`substr: ${substr} --- remain: ${remainingStr} --- str: ${str}`);
  //
  //     let combinations = possibleSentences(remainingStr);
      // console.log(`combinations: ${combinations}`);
    // }
    if (substr in wordDict) {
      console.log(`substr: '${substr}' str: '${str}'`);
      let remainingStr = str.substr(substr.length);
      if (!remainingStr) {
        result.push([substr]);
      } else {

        let SA2 = possibleSentences(remainingStr);
        let SA = [];
        if (SA2) {
          for (let j = 0; j < SA2.length; j++) {
            SA = [substr];
            for (let k = 0; k < SA2[j].length; k++) {
              SA.push(SA2[j][k])
            }
            result.push(SA)
          }
        }
      }
    }
  }
  if (!result.length) return false;
  return result;
};

const str = 'paymentsandpaypal';
console.log(possibleSentences(str));
