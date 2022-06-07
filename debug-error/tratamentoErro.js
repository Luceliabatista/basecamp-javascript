function validacaoArray(array, num) {
    try {
        if (!array || !num) throw new ReferenceError('Envie os parâmetros')

        if (typeof array !== 'object') throw new TypeError('O Array precisa ser do tipo "object"')

        if (typeof num !== 'number') throw new TypeError('O dado precisa ser do tipo "number"')

        if (array.length !== num) throw new RangeError(`Tamanho inválido! O número inserido foi o ${num}, e este não corresponde ao tamanho do array ${array}.`)

        return (`O número inserido foi o ${num}, e este corresponde ao tamanho do array: [${array}]`)
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado: " + e)
        }

    }
}

console.log(validacaoArray(["letra"],1))