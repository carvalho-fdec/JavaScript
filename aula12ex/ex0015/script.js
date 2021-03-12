function verificar () {
    var atual = new Date()
    var anoatual = atual.getFullYear()
    var idade = document.getElementById('idade')
    var sexo = document.getElementsByName('sexo')
    var resultado = document.getElementById('resposta')

    
    if (idade.value == '' || idade.value > anoatual) {
        alert('Erro. Digite a idade correta')
    }
    else{
        idade = anoatual - Number(idade.value)
        if (sexo[0].checked) {
            sexo = 'masculino'
        }
        else {
            sexo = 'feminino'
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `${idade} anos do sexo ${sexo}`
    var imagem = document.querySelector('foto')
    imagem.removeAttribute(hidden)
    imagem.src = 'idosa.jpg'
}