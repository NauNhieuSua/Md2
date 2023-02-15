function fibo(n) {
    var a = 0;
    var b = 1;
    for (var i = 1; i <= n; i++) {
        console.log(a);
        var c = a + b;
        a = b;
        b = c;
    }
}
fibo(9);
