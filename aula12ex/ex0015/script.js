function verificar () {
    var atual = new Date()
    var anoatual = atual.getFullYear()
    var idade = document.getElementById('idade')
    var sexo = document.getElementsByName('sexo')
    var resultado = document.getElementById('resposta')

    
    if (idade.value == '' || idade.value > anoatual) {
        alert('Erro. Digite a idade correta')
    }
    else {
        idade = anoatual - Number(idade.value)
        if (sexo[0].checked) {
            sexo = 'masculino'
        }
        else {
            sexo = 'feminino'
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `${idade} anos do sexo ${sexo}<br>`
    //var img = document.getElementById('img')
    var img = document.createElement('img')
    //img.removeAttribute(hidden)
    if (idade < 5) {
        img.setAttribute('src', 'crianca.jpg')
    } else if (idade < 18) {
        if (sexo == 'masculino') {
            img.setAttribute('src', 'adolescente_masc.jpg')
        } else {
            img.setAttribute('src','adolescente_fem.jpg')
        } 
    } else if (idade < 60) {
        if (sexo == 'masculino') {
            img.setAttribute('src','adulto.jpg')
        } else {
            img.setAttribute('src','adulta.jpg')
        }
    } else {
        if (sexo == 'masculino') {
            img.setAttribute('src','idoso.jpg')
        } else {
            img.setAttribute('src','idosa.jpg')
        }
    }
        
    resultado.appendChild(img)
}