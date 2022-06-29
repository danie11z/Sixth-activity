let aboutMe = {
    nome: 'Daniel',
    endereco: 'RJ',
    birthday: '31 de março',
}

console.log(aboutMe)

aboutMe.idade = 19
console.log(aboutMe)

delete aboutMe.endereco
console.log(aboutMe)

let cadastro = [{
    nome: 'Abigail',
    idade: 29,
    telefone: 506789353,
    amigos: ['Isaque', 'Nicolas', 'Fernanda', 'Aléxia'],
},
{
    nome: 'Isaque',
    idade: 22,
    telefone: 2827498417,
    amigos: ['Matheus', 'Yara', 'Ítalo', 'Brenda'],
},
{
    nome: 'Rebecca',
    idade: 25,
    telefone: 921047085780,
    amigos: ['Giovana', 'Gisele', 'Victor', 'Gustavo'],
},
{
    nome: 'Wallace',
    idade: 25,
    telefone: 18748975293857,
    amigos: ['Rafael', 'Lissandra', 'Vanessa', 'Yve'],
},
{
    nome: 'Gisele',
    idade: 27,
    telefone: 39104910950,
    amigos: ['Danielle', 'Valkyria', 'Marcos', 'Patrícia'],
}
]

console.log(cadastro)

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[2])
console.log(cadastro[0].amigos[1])
console.log(cadastro[0].amigos[2])