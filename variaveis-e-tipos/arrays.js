// ## Atividade 2

function elementosPares(array) {
    if (!array) return `Array ${array} informado é inválido`
    if (!array.length) return `Array ${array} informado é inválido`

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0`)
            array[i] = 0
        }
    }
    return array
}

let array1 = [1, 5, 8, 3, 10, 25, 82, 25]
let array2 = [1, 5, 7, 3, 1, 25, 05, 25, 0]
let array3 = null

console.log(elementosPares(array1))
console.log(elementosPares(array2))
console.log(elementosPares(array3))