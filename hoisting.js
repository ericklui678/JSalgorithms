// HOIST EXAMPLE 1
// function foo(){
//     function bar() {
//         return 3;
//     }
//     return bar();
//     function bar() {
//         return 8;
//     }
// }
// console.log(foo());

// HOIST EXAMPLE 2
// console.log(foo());
// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }

// HOIST EXAMPLE 3
// alert(foo());
// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }

// HOIST EXAMPLE 4
// function foo(){
//     return bar();
//     var bar = function() {
//         return 3;
//     };
//     var bar = function() {
//         return 8;
//     };
// }
// console.log(foo());
