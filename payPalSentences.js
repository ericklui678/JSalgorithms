function possibleSentences(str) {
  const wordMap = {
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
}

const sentence = 'paymentsandpaypal';
console.log(possibleSentences(sentence));



/*
'Payment sand Pay Pal'
'Payment sand PayPal'

'Payments and Pay Pal'
'Payments and PayPal'
*/
