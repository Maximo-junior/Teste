function isFibonacci(n) {
  let a = 0,
    b = 1;

  while (b < n) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b === n;
}

const numero = prompt("Informe um número: ");

if (isFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
