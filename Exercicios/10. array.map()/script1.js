//Map é usado quando se quer mapear os traduzir todos os elementos do array
const winners = [{
        nome: 'Equipe maravilinda',
        pais: 'Canadá',
    },
    {
        nome: 'Liga da Justiça',
        pais: 'EUA',
    },
    {
        nome: 'Mega Grupo',
        pais: 'Brasil',
    }
]

const vencedores = winners.map((equipe) => {
    return equipe.nome;

})

console.log(vencedores);

const paises = winners.map(function(local) {
    return local.pais
})

console.log(paises);