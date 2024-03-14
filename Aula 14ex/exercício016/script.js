function contar(){
  let inicio = document.getElementById('inicio').value
  let fim = document.getElementById('fim').value
  let pulo = document.getElementById('pulo').value
  let res = document.getElementById('res')

  if (inicio.lenght == 0 || fim.lenght == 0 || pulo.lenght == 0){
    alert('[ERRO]')
  } else {
    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(pulo)
    if (p <= 0){
      p = 1
    }
    if (i < f){
      for (let c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      for (let c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
































  /*if (inicio.lenght == 0 || pulo == 0 || fim.lenght == 0){
    //alert('[ERRO] Você deve ter esquecido de digitar Algum Número, por favor, digite e tente novamente!')
  } else{
    res.innerHTML = `Contando... <br/>`
    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(pulo)

    if (p <= 0){
      alert('Passo Inválido, considerando Passo = 1');
      p = 1
    }

    if (i < f){
      //Contagem Crescente
      for (let c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449} `
      }
    } else {
      //Contagem Decrescente
      for(let c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }*/
}