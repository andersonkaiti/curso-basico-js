function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora é ${hora}h${minutos}min.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = "manha.png"
        document.body.style.background = "#C29364"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = "#C84D44"
    } else {
        // BOA NOITE
        img.src = "noite.png"
        document.body.style.background = "#6E3765"
    }
}
