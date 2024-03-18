function fatorial(n){
  let fat = 1
  for (let c = n; c > 1; c--){
    fat *= n
  }
  return fat
}
console.log(fatorial(6))
//Fatorial: 5! = 5 * 4 * 3 * 2 * 1