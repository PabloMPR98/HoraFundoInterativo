function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() 
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML = `Agora sao ${hora} horas e ${min} minutos.`
if (hora >= 0 && hora <12){
    //BOM DIA!
    img.src = 'manha.png'
    document.body.style.background = '#F6CD87'
}else if (hora >= 12 && hora < 18){
    // BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.background = '#F6710A'
}else{
    //BOA NOITE!
    img.src = 'noite.png'
    document.body.style.background = '#04223C'

}

}
