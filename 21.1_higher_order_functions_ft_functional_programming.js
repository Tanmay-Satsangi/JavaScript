function y(x) {  // x: Callback Function & y: Higher order Function
    x();
}

function x() {
    console.log("Namaste");
}

y(x);
