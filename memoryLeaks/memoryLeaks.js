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
var cnt = 0; // helps us to differentiate the leaked objects in the debugger
var replaceThing = function() {
    var originalThing = theThing;
    var unused = function() {
        if (originalThing) // originalThing is used in the closure and hence ends up in the lexical environment shared by all closures in that scope
            console.log("hi");
        };
        // originalThing = null; // <- nulling originalThing here tells V8 gc to collect it
        theThing = {
            longStr: (++cnt) + '_' + (new Array(1000000).join('*')),
            someMethod: function() { // if not nulled, original thing is now attached to someMethod -> <function scope> -> Closure
                console.log(someMessage);
            }
        };
    };
setInterval(replaceThing, 1000);
*/
