function verificar(){
  let data = new Date()
  let ano = data.getFullYear()
  let fAno = document.getElementById('txtano')
  let res = document.getElementById('res')

  if (fAno.value.length == 0 || fAno.value > ano){
    alert('[Erro] Verifique a Data e tente Novamente')
  }else{
    let fsex = document.getElementsByName('genero')
    let idade = ano - Number(fAno.value)
    let genero = ''
    img = document.createElement('img')//Cria a tag img no HTML
    img.setAttribute('id', 'foto')//Coloca o id = "foto"

    if (fsex [0].checked){
      genero = 'Homem'
      if (idade > 0 && idade <= 12){
        //Criança
        img.setAttribute('src', 'img/Garoto Crianca.png')//Coloca o Atibuto src na imagem e o link da foto
      }else if(idade < 18){
        //Adolescente
        img.setAttribute('src', 'img/Garoto Adolescente.png')
      }else if(idade < 60){
        //Adulto
        img.setAttribute('src', 'img/Homem Adulto.png')
      }else if(idade <= 120){
        //Idoso
        img.setAttribute('src', 'img/Homem Idoso.png')
      }


    } else if (fsex [1].checked){
      genero = 'Mulher'
      if (idade > 0 && idade <= 12){
        //Criança
        img.setAttribute('src', 'img/garota crianca.png')
      }else if(idade < 18){
        //Adolescente
        img.setAttribute('src', 'img/Garota Adolescente.png')
      }else if(idade <= 55){
        //Adulto
        img.setAttribute('src', 'img/Mulher Adulta.png')
      }else if(idade <= 120){
        //Idoso
        img.setAttribute('src', 'img/Mulher Idosa.png')
      }
    }
    res.style.textAlign = 'center'

    res.innerHTML = `Detectamos ${genero} com ${idade} anos`

    res.appendChild(img)//Adicionar Elemento
  }

}