function contar(){
  let num = document.getElementById('num').value
  let res = document.getElementById('res')

  for (let n = 1; n <= 10; n++) {
    let numero = Number(num)
    res.innerHTML += `
    <table>
      <tbody>
        <tr>
          <td>${numero} x ${n} = ${num*n} 
        </tr>
      </tbody>
    </table>`
  }
}