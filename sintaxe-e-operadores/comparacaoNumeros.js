function verificacaoPrincipal(num1, num2) {
    if (!num1 || !num2) return ('É necessário definir 2 números diferentes de 0')

    const fase1 = comparacao1(num1, num2)
    const fase2 = comparacao2(num1, num2)

    return (`${fase1} ${fase2}`)
}

function comparacao1(num1, num2) {
    if (num1 === num2) {
        return (`Os números ${num1} e ${num2} são iguais.`)
    } else if (num1 !== num2) {
        return (`Os números ${num1} e ${num2} não são iguais.`)
    }
}

function comparacao2(num1, num2) {
    let soma = num1 + num2
    const parametro1 = 10
    let compara10 = 'menor'
    const parametro2 = 20
    let compara20 = 'menor'

    if (soma > parametro1) {
        compara10 = 'maior'
    }
    if (soma > parametro2) {
        compara20 = 'maior'
    }
    if (soma < parametro1) {
        compara10 = 'menor'
    }
    if (soma === parametro1) {
        compara10 = 'igual'
    }
    if (soma === parametro2) {
        compara20 = 'igual'
    }
    return (`Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20.`)
}
console.log(verificacaoPrincipal(2, 0)) 