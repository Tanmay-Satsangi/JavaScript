// setTimeout with 0(zero) seconds

console.log("Start");

setTimeout(function cb() {
    console.log("Callback Function");
}, 0);

console.log("End");
