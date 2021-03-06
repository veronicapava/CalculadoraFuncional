function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    if (num1 === 0 || num2 === 0) return 0
    const arr = Array(num1).fill(num2)
    return arr.reduce((acc, act) => sumar(acc, act))
}

function dividir(dividendo, divisor) {

    if (divisor == 0) { throw new Error("No se puede dividir por cero") }
    if (dividendo == 0) return 0
    if (divisor > dividendo) { throw new Error("No se puede dividir así, solo divisiones enteras") }

    const arr = Array.from(Array(dividendo).keys())
    return arr.find(x => multiplicar(x, divisor) > restar(dividendo, divisor) && multiplicar(x, divisor) < sumar(dividendo, divisor))

}

function getValues() {
    const myArgs = process.argv.slice(2);
    let operacion = myArgs[0]
    let numero1 = Number(myArgs[1])
    let numero2 = Number(myArgs[2])
    return { operacion, numero1, numero2 }
}

function run() {
    let input = getValues()
    let n1 = input.numero1
    let n2 = input.numero2
    let operacion = input.operacion

    if (operacion === "sumar") {
        let resultado = sumar(n1, n2)
        console.log("Resultado: ", resultado)
    }
    else if (operacion === "restar") {
        let resultado = restar(n1, n2)
        console.log("Resultado: ", resultado)
    }

    else if (operacion === "multiplicar") {
        let resultado = multiplicar(n1, n2)
        console.log("Resultado: ", resultado)
    }

    else if (operacion === "dividir") {
        let resultado = dividir(n1, n2)
        console.log("Resultado: ", resultado)
    }
    else
        console.error("Escribiste mal la operacion")
}

run()