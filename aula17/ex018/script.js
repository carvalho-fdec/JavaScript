//let num = Number(document.querySelector('input#num').value)
let lista = document.querySelector('select#lista')
let vetor = []
let resultado = document.querySelector('div#resultado')

function adicionar () {
    let num = Number(document.querySelector('input#num').value)
    //alert(num)
    if (num < 1 || num > 100) {
        alert('Erro!!! Digite um número válido.')
    } else {
        resultado.innerHTML = ''
        if (vetor.indexOf(num) != -1) {
            alert('item repetido')
        } else {
            let item = document.createElement('option')
            item.text = `número ${num} adicionado`
            lista.appendChild(item)
            vetor.push(num)
        }
    }
    document.querySelector('input#num').value = ''
    document.querySelector('input#num').focus()
}

function finalizar () {
    if (vetor.length != 0) {
        resultado.innerHTML = `Ao todo temos ${vetor.length} números`
        
        let menor = vetor[0] 
        let maior = vetor[0]
        let soma = 0
        let media = 0
        for (let pos in vetor) {
            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if (vetor[pos] < menor) {
                menor = vetor[pos]
            }
            soma += vetor[pos]
        }
        resultado.innerHTML += `<p>O menor número é ${menor}<\p>`
        resultado.innerHTML += `<p>O maior número é ${maior}<\p>`
        resultado.innerHTML += `<p>A soma dos números é ${soma}<\p>`
        resultado.innerHTML += `<p>A média dos números é ${soma/vetor.length}<\p>`
    } else {
        alert('adicione números primeiro')
    }
}