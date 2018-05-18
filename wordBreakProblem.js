const findValidSentences = (sentence, dict) => {
  // base case
  if (sentence === "") return [];
  // recursive case
  for (let i = 0; i <= sentence.length; i++) {
    let prefix = sentence.substring(0, i);
    if (prefix in dict) {
      let suffix = sentence.substring(i);
      let result = findValidSentences(suffix, dict);
      if (result) return prefix + ' ' + result;
    }
  }
  return null;
};

const sentence = 'paymentsandpaypal';
const dict = {
  'a': true,
  'ay': true,
  'an': true,
  'and': true,
  'me': true,
  'men': true,
  'pa': true,
  'pal': true,
  'pay': true,
  'payment': true,
  'payments': true,
  'paypal': true,
  'sand': true
};

console.log(findValidSentences(sentence, dict));
