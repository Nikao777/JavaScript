let agora = new Date()
let hora = agora.getHours()
console.log(`São ${hora} Hora/s`)
if (hora >= 5 && hora < 12){
  console.log('Bom Dia!')
} else if (hora >= 12 && hora < 18){
  console.log('Boa Tarde!')
} else if(hora >= 18 || hora < 5){
  console.log('Boa Noite!')
}