// #Atividade 2

const pessoa1 = {
    nome: "Rita",
    idade: 28
}

const pessoa2 = {
    nome: "Cláudia",
    idade: 39
}

const pessoa3 = {
    nome: "João",
    idade: 69
}

const pessoa4 = {
    nome: "Ricardo",
    idade: 98
}

const animal = {
    nome: "Lucky",
    idade: 6,
    raca: "Pischer"
}


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 35))
console.log(calculaIdade.call(animal, 5))
console.log(calculaIdade.apply(pessoa3, [17]))
