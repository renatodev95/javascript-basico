var res = document.getElementById('resultado')
            
function soma() {
    var n1 = Number(prompt('Informe o primeiro valor'))
    var n2 = Number(prompt('Informe o segundo valor'))
    res.innerHTML = `<p>${n1} + ${n2} = ${n1+n2}</p>`
}
function subtrai() {
    var n1 = Number(prompt('Informe o primeiro valor'))
    var n2 = Number(prompt('Informe o segundo valor'))
    res.innerHTML = `<p>${n1} - ${n2} = ${n1-n2}</p>`
}
function multiplica() {
    var n1 = Number(prompt('Informe o primeiro valor'))
    var n2 = Number(prompt('Informe o segundo valor'))
    res.innerHTML = `<p>${n1} * ${n2} = ${n1*n2}</p>`
}
function divide() {
    var n1 = Number(prompt('Informe o primeiro valor'))
    var n2 = Number(prompt('Informe o segundo valor'))
    res.innerHTML = `<p>${n1} / ${n2} = ${n1/n2}</p>`
}