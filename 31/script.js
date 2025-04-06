//Crea una función llamada invertirPalabra que reciba un string (una palabra) y devuelva esa palabra al revés.

function invertirPalabra(palabra) {
  let letras = palabra.split(""); //palabra en array
  let letrasInvertidas = letras.reverse(); //invertirlo
  let palabraInvertida = letrasInvertidas.join(""); //unir a string
  return palabraInvertida;
}

console.log(invertirPalabra("Mundo"));
