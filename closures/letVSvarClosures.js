// Let binds a fresh value than keeping an old reference so this will properly print 1 through 5 after the delay

/*
Because the ES6 specification actually says that let i in a for loop header scopes i not only to the for loop, but to each iteration of the for loop. In other words, it makes it behave like this:

{ let k;
    for (k=1; k<=5; k++) {
        let i = k; // <-- new `i` for each iteration!
        setTimeout(function(){
            console.log("i:",i);
        },i*1000);
    }
}
*/
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 500);
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 500);
}
