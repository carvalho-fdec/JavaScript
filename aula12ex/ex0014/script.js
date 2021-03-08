function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        //manha
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'

    } else if (hora < 19) {
        //tarde
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //noite
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}