let num = document.getElementById('num')
let lista = document.getElementById('lista')
let localresult = document.getElementById('res')
let valores = []

function validarnum (n) {
  if (Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false  
  }
}


function adicionar() {
  if (validarnum(num.value) && !inLista(num.value, valores)) {
    valores.push(Number (num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adiconado`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('O número foi inválido ou já foi adicionado')
  }
  num.value = ''
  num.focus() //quando digitar um número e adicionar, ele vai voltar o cursor para o local de adicionar número
}

function finalizar(){
  if (valores.length == 0){
    alert('Adicione um número')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior)
        maior = valores[pos]
      if (valores [pos] < menor)
        menor = valores[pos] 
    }

    media = soma / tot

    localresult.innerHTML = ''
    localresult.innerHTML += `<p>Ao Todo, temos ${tot} números adicionados</p><br/>`
    localresult.innerHTML += `<p>O maior valor informado foi ${maior}</p> <br/>`
    localresult.innerHTML += `<p>O menor valor informado foi ${menor}</p> <br/>`
    localresult.innerHTML += `A soma dos valores é ${soma} <br/>`
    localresult.innerHTML += `<br/> A média dos valores é ${media}`
  }
}
