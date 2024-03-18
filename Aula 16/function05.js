//Recursividade
function fatorial(n){
  if (n == 1){
    return 1
  } else {
    return n * fatorial(n - 1)
  }
}

/* Fatorial: 5! = 5 * 4 * 3 * 2 * 1
ou 5! = 5 * 4!

n! = n * (n - 1)!
1! = 1

*/