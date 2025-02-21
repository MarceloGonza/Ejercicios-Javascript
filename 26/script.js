//Crea una función etiquetada que reciba un nombre y un apellido dentro de un template literal
// y devuelva el nombre completo en formato de apellido, nombre.

//Usa una función etiquetada (tagged template function).
//La función debe tomar el nombre y apellido desde un template literal.
//Debe devolver el nombre en formato "APELLIDO, Nombre" (con el apellido en mayúsculas).

function nameAndLastname(strings, firstName, lastName) {
  return `${lastName.toUpperCase()}, ${firstName}`;
}

const first = "Marcelo";
const last = "gonzalez";

console.log(nameAndLastname`${first} ${last}`);
