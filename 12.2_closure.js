function x() {
    var a = 7;

    function y() {
        console.log(a);
    }
    return y;
}

z = x()
console.log(z);
