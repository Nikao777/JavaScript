function contar(){
  let num = document.getElementById('num').value
  let tabuada = document.getElementById('localt')

  if(num == ''){
    alert('[ERRO] Digite um Número')
  } else{
    tabuada.innerHTML = ''
    for(let n = 1; n <= 10; n++){
      let numero = Number(num)
      let local = document.createElement('option')
      local.text = (`${numero} x ${n} = ${n*numero}`)
      local.value = 'tab${n}'

      tabuada.appendChild(local)
    }
  }
}