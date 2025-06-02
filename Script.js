// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.forEach(element => { //Percorre array
//     console.log(element)
// });

// const pares = numeros.filter(numer => numer % 2 == 0) //Crie um novo array com condições
// console.log(`Filter: ${pares}`)

// const dobro = numeros.map(num => num * 2) //Cria um novo array modificando original
// console.log(`Map: ${dobro}`)

// const soma = numeros.reduce((acumulador, valor) => acumulador + valor) //Reduz array é um unico valor 
// console.log(`Reduce: ${soma}`)

// const temPar = numeros.some(num => num % 2 == 0) //Verifica se pelo menos um é verdadeiro
// console.log(`Some: ${temPar}`)

// const busca = numeros.find(num => num > 2) //Primeiro elemento encontrado na condição
// console.log(`Find: ${busca}`)

// constMaiorQue2 = numeros.every(num => num > 2) //Verifica se todos são verdadeiros
// console.log(`Every: ${constMaiorQue2}`)


// const empty  = []
// for (num of dobro){
//     empty.push(num * 2)
// }
// console.log(empty)

const alunos = [
  { nome: 'João', idade: 18, cidade: "São Paulo" },
  { nome: 'Maria', idade: 12, cidade: "Recife" },
  { nome: 'Pedro', idade: 20, cidade: "Salvador" },
  { nome: 'Lucas', idade: 8, cidade: "São Paulo" },
  { nome: 'Mia', idade: 21, cidade: "Olinda" },
  { nome: 'Adila', idade: 10, cidade: "São Paulo" }
];

const nomes = ["Lucas", "Mia", "Raiza", "Jonathan"]

alunos.forEach(element => {
    console.log(`${element.nome}, ${element.idade}`)
});

const idades = alunos.map(num => num.idade)
console.log(`Array com idades: ${idades}`)

const SP = alunos.filter(name => name.cidade == "São Paulo")
console.log(`Alunos morando em São Paulo: ${JSON.stringify(SP)}`);

const somaIdades = alunos.reduce((acumulador, aluno) => acumulador + aluno.idade, 0);
console.log(somaIdades)

const som = alunos.some(name => name.cidade == "Olinda")
console.log(som)

const busca = alunos.find(name => name.cidade == "São Paulo")
console.log(busca)

const todos = alunos.every(name => name.idade >= 18)
console.log(todos)

const nomeMaisculo = nomes.filter(nome => nome.length < 4).map(nome => nome.toUpperCase())
console.log(nomeMaisculo)
