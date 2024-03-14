function contar(){
  let num = document.getElementById('num').value
  let res = document.getElementById('res')
  const localt = document.getElementById('localt')

  if (num == ''){
    alert('Digite um Número')
  } else{
    localt.innerHTML = ''
    for (let n = 1; n <= 10; n++) {
      let numero = Number(num)
      let item = document.createElement('option')
      item.text = `${numero} x ${n} = ${num*n}`
      item.value = `tab${n}`
      localt.appendChild(item)
    }
  }
}