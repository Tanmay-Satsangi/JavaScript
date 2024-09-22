var a = 100;
{
    var a = 10;
    var b = 20;
    var c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);

// Variable 'a = 10;' shadows the variable 'a = 100;'

// OUTPUT:
// 10
// 20
// 30
// 10