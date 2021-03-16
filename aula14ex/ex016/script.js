function contar () {
    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)
    var resultado = document.querySelector('div#resultado')

    if ((inicio == 0) || (fim == 0) || (passo == 0)) {
        alert('ERRO!!!')
    } else {
        resultado.innerHTML = `<p>Contando de ${inicio} até ${fim} e passo ${passo}: `
        if (inicio > fim) { //contagem decrescente
            while (inicio>=fim) {
                resultado.innerHTML += `${inicio} `
                inicio -= passo
            }
        } else {
            while (inicio<=fim) { //contagem crescente
                resultado.innerHTML += `${inicio} `
                inicio = inicio + passo
            }
        }
    }
}