let num = document.getElementById('num').value
let itens = document.getElementById('itens')
let result = document.getElementById('res')
let valores = []

function qualificadoNum(n){
  if (Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}

function inList(n, v){
  if (v.indexOf(Number(n)) != -1){
    return true
  } else {
    return false
  }
}

function adicionar(){
  if (qualificadoNum(num) && !inList(num, valores)){
    alert('Tudo Ok!')
  } else {
    alert ('O Número Digitado é Invalido ou já foi Digitado')
  }
}