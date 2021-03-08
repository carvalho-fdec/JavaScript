var dia = new Date()
var diasem = dia.getDay()

console.log(diasem)

switch (diasem) {
    case 0:
        diasem = 'domingo'
        break;
    case 1:
        diasem = 'segunda-feira'
        break
    case 2:
        diasem = 'terça-feira'
        break
    case 3:
        diasem = 'quarta-feira'
        break
    case 4:
        diasem = 'quinta-feira'
        break
    case 5:
        diasem = 'sexta-feira'
        break
    case 6:
        diasem = 'sábado'
        break
    default:
        diasem = 'ERRO'
        break;
}
console.log(diasem)