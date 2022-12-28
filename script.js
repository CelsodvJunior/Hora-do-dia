function carregar () {
  msg = window.document.getElementById('msg')
  img = window.document.getElementById('imagem')
  data = new Date()
  hora = data.getHours()
  minutos = data.getMinutes()
 
  msg.innerHTML = `Agora são ${hora}:${minutos}` 
  
  if(hora >=0 && hora < 12) {
    // BOM DIA!
    img.src = 'imagens/manha1.png'
    document.body.style.background = '#fbf191'
  }else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    img.src = 'imagens/tarde1.png'
    document.body.style.background = '#fa9427'
  } else {
    // BOA NOITE
    img.src = 'imagens/noite.png'
    document.body.style.background = '#16315a'
  }
}
