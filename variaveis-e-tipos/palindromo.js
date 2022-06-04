// Solução 1
function verificaPalindromo(palavra) {
    if (!palavra) return "Palavra inexistente"

    return palavra.split("").reverse().join("") === palavra
}

console.log(verificaPalindromo("ama"))

// Solução 2

function verificaPalindromo2(palavra) {
    if (!palavra) return "string inexistente";

    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(verificaPalindromo2("gato"))
