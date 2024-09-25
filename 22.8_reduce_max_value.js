const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function (max, arr) {
    if (arr > max) {
        max = arr
    }
    return max
}, 0);

console.log(output);
