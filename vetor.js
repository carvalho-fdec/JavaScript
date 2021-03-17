let vetor = ['a', 'b', 'c', 'd']

console.log(vetor)
console.log(`o vetor tem os elementos ${vetor}`)
console.log(`o vetor tem ${vetor.length} elementos`) //tamanho

vetor.push('e') //adicionar
console.log(`adicionado o elemento e no vetor ${vetor}`)

console.log(`o vetor tem ${vetor.length} elementos`)

console.log(`o elemento da 3 posição é ${vetor[2]}`)

vetor.push('b')
vetor.sort() //ordenar
console.log(`vetor ordenado com novo elemento b ${vetor}`)

for (let pos in vetor) { //percorrer o vetor
    console.log(`posição ${pos} valor ${vetor[pos]}`)
}

console.log(`o elemento c está na posição ${vetor.indexOf('c')}`) //posição de um elemento
