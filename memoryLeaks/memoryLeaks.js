/* 1 ---------------------------------------------------
Accidental Global variables since global variables remain in memory throughout the execution of the page even if they are not needed
*/

// function foo(arg) {
//   bar = 'this is a hidden global variable';
// }
//
// function foo(arg) {
//   window.bar = 'this is an explicit global variable'
// }

/* 2 ---------------------------------------------------
Forgotten timers or callbacks
*/

/* 3 ---------------------------------------------------
Out of DOM references
var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image'),
    text: document.getElementById('text')
};

function doStuff() {
    image.src = 'http://some.url/image';
    button.click();
    console.log(text.innerHTML);
    // Much more logic
}

function removeButton() {
    // The button is a direct child of body.
    document.body.removeChild(document.getElementById('button'));

    // At this point, we still have a reference to #button in the global
    // elements dictionary. In other words, the button element is still in
    // memory and cannot be collected by the GC.
}
*/

/* 4 ---------------------------------------------------
var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  // Define a closure that references originalThing but doesn't ever actually
  // get called. But because this closure exists, originalThing will be in the
  // lexical environment for all closures defined in replaceThing, instead of
  // being optimized out of it. If you remove this function, there is no leak.
  var unused = function () {
    if (originalThing)
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join('*'),
    // While originalThing is theoretically accessible by this function, it
    // obviously doesn't use it. But because originalThing is part of the
    // lexical environment, someMethod will hold a reference to originalThing,
    // and so even though we are replacing theThing with something that has no
    // effective way to reference the old value of theThing, the old value
    // will never get cleaned up!
    someMethod: function () {}
  };
  // If you add `originalThing = null` here, there is no leak.
};
setInterval(replaceThing, 1000);
*/
