let img = document.getElementById('imagem')
let msg = document.getElementById('msg')
const data = new Date()
const hora = data.getHours()

function carregar(){
  msg.innerHTML = `<p class= "txt">Agora são ${hora} Horas</p>`;
  if (hora > 5 && hora < 12){
  //Bom Dia!
    img.src = './img/manha.png'
    document.body.style.background = '#fa8f55'
  }else if (hora >= 12 && hora < 18){
    //Boa Tarde!
    img.src = './img/tarde.png'
    document.body.style.background = '#f6794d'
  }else if(hora >= 18 || hora <= 5){
    //Boa Noite!
    img.src = './img/noite.png'
    document.body.style.background = '#002665'
  }
}