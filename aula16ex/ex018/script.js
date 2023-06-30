var listaNumeros = []

function adicionar() {
    let numero = document.getElementById("numero").value
    var lista = document.getElementById("lista")
    var res = document.getElementById("res")
    var n = Number(numero)
    var i = listaNumeros.indexOf(n)

    if (numero.length == 0 || Number(numero) < 1 || Number(numero) > 100 || n == listaNumeros[i]) {
        window.alert("Valor inválido ou já encontrado na lista.")
    } else {
        res.innerHTML = ""
        listaNumeros.push(n)
        let indice = 0
        let valor = document.createElement("option")
        valor.text = `Valor ${n} adicionado.`
        lista.appendChild(valor)
        indice++
    }
}

function calcular(){
    if (listaNumeros.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else if (listaNumeros.length > 0){
        listaNumeros.sort()
        var res = document.getElementById("res")
        res.innerHTML = ""
        res.innerHTML += `Ao todo, temos ${listaNumeros.length} cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${listaNumeros[listaNumeros.length - 1]}.<br>`
        res.innerHTML += `O menor valor informado foi ${listaNumeros[0]}.<br>`
        var soma = 0
        for(let i = 0; i < listaNumeros.length; i++) {
            soma += listaNumeros[i]
        }
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        let media = soma / listaNumeros.length
        res.innerHTML += `A média dos valores digitados é ${media}.`
    }
}