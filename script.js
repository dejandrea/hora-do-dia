function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById("msg2")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 0
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12) {
        img.src = 'foto_manha2.png'
        msg2.innerHTML = "Bom Dia!"
        document.body.style.background = "#319441"
    } else if(hora >= 12 && hora < 18) {
        img.src = 'foto_tarde2.png'
        msg2.innerHTML = "Boa Tarde!"
        document.body.style.background = "#ba8e50"
    }else{
        img.scr = 'foto_noite2.png'
        msg2.innerHTML = "Boa Noite!"
        document.body.style.background = "#5a95a3"

    }
}
