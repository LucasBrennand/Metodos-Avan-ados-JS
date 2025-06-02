const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.forEach(element => { //Percorre array
    console.log(element)
});

const pares = numeros.filter(numer => numer % 2 == 0) //Crie um novo array com condições
console.log(`Filter: ${pares}`)

const dobro = numeros.map(num => num * 2) //Cria um novo array modificando original
console.log(`Map: ${dobro}`)

const soma = numeros.reduce((acumulador, valor) => acumulador + valor) //Reduz array é um unico valor 
console.log(`Reduce: ${soma}`)

const temPar = numeros.some(num => num % 2 == 0) //Verifica se pelo menos um é verdadeiro
console.log(`Some: ${temPar}`)

const busca = numeros.find(num => num > 2) //Primeiro elemento encontrado na condição
console.log(`Find: ${busca}`)

constMaiorQue2 = numeros.every(num => num > 2) //Verifica se todos são verdadeiros
console.log(`Every: ${constMaiorQue2}`)








