//Crea una función que reciba una cadena de texto y devuelva la cantidad de vocales que contiene

let string = prompt(
  "Ingrese una palabra para saber cuántas vocales contiene: "
);

function contarVocales(string) {
  let contador = 0;
  let vocales = "aeiouAEIOU";

  for (let i = 0; i < string.length; i++) {
    if (vocales.includes(string[i])) {
      contador++;
    }
  }

  return contador;
}

console.log("Cantidad de vocales:", contarVocales(string));
