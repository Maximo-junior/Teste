function trocar(strin) {
  let resultado = "";
  for (let i = strin.length - 1; i >= 0; i--) {
    resultado += strin[i];
  }
  return resultado;
}
console.log(trocar("Cinema"));
