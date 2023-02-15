

function fibo(n:number){

    let a:number = 0
    let b:number = 1
    for (let i = 0; i < n; i++) {
        console.log(a)
        let c:number = a + b
        a = b
        b = c
    }
}
fibo(9)



