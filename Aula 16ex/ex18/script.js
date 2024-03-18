let num = document.getElementById('num').value
let itens = document.getElementById('itens')
let result = document.getElementById('res')
let valores = []

function validarnum (n) {
  if (Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}

function inList(n, l) {
  if (l.indexOf(n) != -1){
    return true
  } else {
    return false
  }
}


function adicionar() {
  if (validarnum(num) && !inList(num, itens))
    alert('Tudo Ok!')
    
} else {
  alert('O Número que digitou é inválido ou já foi digitado anteriormente')
}