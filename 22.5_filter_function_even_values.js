const arr = [5, 1, 3, 2, 6];

function isEven(x) {
    return x % 2 == 0;
}

const output = arr.filter(isEven);
console.log(output);
