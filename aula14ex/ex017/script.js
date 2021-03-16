function tabuada () {
    var num = Number(document.querySelector('input#num').value)
    var res = document.getElementById('tabuada')
    
    res.innerHTML = ''
    for (var cont=0; cont<=10; cont++) {
        //res += `${num} X ${cont} = ${(num*cont)}<br>`
        //alert(`${num} X ${cont} = ${(num*cont)}<br>`)
        let item = document.createElement('option')
        item.text = `${num} x ${cont} = ${num*cont}`
        res.appendChild(item)
    }
}