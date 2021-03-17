function soma (n1=0, n2=0) { //por padrão é 0
    return n1 + n2
}

console.log(soma(2, 3))
console.log(soma(4))

function fatorial (num=1) {
    if (num<=1) {
        return 1
    } else {
        return num * fatorial(num-1)
    }
}

console.log(fatorial(0))