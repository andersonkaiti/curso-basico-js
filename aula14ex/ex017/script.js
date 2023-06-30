function tabuada() {
    var numero = document.getElementById("numero").value
    var tabuada = document.getElementById("tabuada")

    if (numero.length == 0) {
        window.alert("Por favor, digite um número.")
    } else {
        let n = Number(numero)
        tabuada.innerHTML = ""
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${(n * c)}`
            tabuada.appendChild(item)
        }
    }
}