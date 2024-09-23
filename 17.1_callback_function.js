setTimeout(function () {
    console.log("timer");
}, 5000);

function x(b) {
    console.log("x");
    b();            // In the copy code there is 'y' instead of 'b'. I am trying to understand that this line call which function.
}

x(function y() {
    console.log("y");
})
