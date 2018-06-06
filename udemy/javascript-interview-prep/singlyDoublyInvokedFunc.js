// Create a function that can be invoked singly or doubly

function getTotal() {
  let args = Object.values(arguments);

  if (args.length > 1) {
    return args.reduce((sum, num) => sum + num);
  } else if (args.length === 1) {
    return num2 => args[0] + num2; // only works with 2 curry arguments
    // use below for infinite currying, then call getTotal(10)(20).value
    // let fn = x => getTotal(args[0] + x);
    // fn.value = args[0];
    // console.log(fn.value, args[0]);
    // return fn;
  }
}

console.log(getTotal(10, 20, 30));
console.log(getTotal(10)(20));
/*
getTotal(10, 20)
getTotal(10)(20)
*/
