const numero = parseInt(prompt("Ingresa un número del 1 al 1000:"));

if (isNaN(numero) || numero < 1 || numero > 1000) {
  console.log("Por favor ingresa un número válido entre 1 y 1000.");
} else {
  function convertirARomano(n) {
    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanos = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let resultado = "";

    for (let i = 0; i < valores.length; i++) {
      while (n >= valores[i]) {
        resultado += romanos[i];
        n -= valores[i];
      }
    }

    return resultado;
  }

  const romano = convertirARomano(numero);
  console.log(`El número ${numero} en romano es: ${romano}`);
}
