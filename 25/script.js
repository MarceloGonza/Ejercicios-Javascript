// Tienes un array de temperaturas registradas durante una semana. Debes encontrar la temperatura más alta.
/*
const temperaturas = [23, 29, 31, 35, 28, 33, 30];

const maxTemp = temperaturas.reduce(
  (max, temperaturas) => (temperaturas > max ? temperaturas : max),
  temperaturas[0]
);

console.log(maxTemp);
*/

//Desafío Extra
//Si quieres practicar más, intenta modificar el código para encontrar:
//La temperatura más baja en vez de la más alta.
//El día en que ocurrió la temperatura más alta (su posición en el array).

/* MAS BAJA
const temperaturas = [23, 29, 31, 35, 28, 33, 30];
const minTemp = temperaturas.reduce(
  (min, temperaturas) => (temperaturas < min ? temperaturas : min),
  temperaturas[0]
);
console.log(minTemp);

*/
//dia temp mas alta:
const temperaturas = [23, 29, 31, 35, 28, 33, 30];

const tempMax = temperaturas.reduce(
  (max, temperaturas) => (temperaturas > max ? temperaturas : max),
  temperaturas[0]
);

const dayMax = temperaturas.indexOf(tempMax);

console.log(
  `la temperatura mas alta fue ${tempMax}, y ocurrio el dia ${dayMax + 1}`
);
