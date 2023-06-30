function contador() {
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var passo = document.getElementById("passo").value
    var res = document.getElementById("res")

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = "Impossível contar."
    } else {
        let inicio = Number(inicio) // Number só foi utilizado agora porque length é um atributo para Strings e não para números.
        let fim = Number(fim)
        let passo = Number(passo)
        if (passo == 0) {
            window.alert("Passo inválido! Considerando PASSO 1.")
            passo = 1
        }
        res.innerHTML = "Contando:<br>"
        if (inicio < fim) {
            for(let i = inicio; i <= fim; i += passo) {
                res.innerHTML += ` ${i} &#x1F449 `
            }
        } else {
            for(let i = inicio; i <= fim; i+= passo) {
                res.innerHTML += ` ${i} &#x1F449`
            }
        }
        res.innerHTML += `&#x1F3F4`
    }
}