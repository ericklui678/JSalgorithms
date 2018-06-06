// Question: What is an IIFE and why are they used?
// IIFE stands for Immediately Invoked Function Expression which immediate
// invokes the function once it is defined.

// The reason for using IIFE is to preserve a private scope within your function
// and prevent overwriting global variables. A good example is when you are using
// jQuery where jQuery defines $ globally. Wrapping your entire JS file in an
// IIFE is one way to prevent this problem

function hello(num) {
  console.log("helo world", num);
}

(function helloIIFE(num) {
  console.log("hello world", num);
})(10);

hello(20);

for (var i = 0; i < 5; i++) {
  console.log(i);
}
