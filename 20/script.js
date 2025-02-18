//Escribir una función llamada contrasenaValida que reciba un string
// y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar false.

var contrasenaValida = prompt("Ingrese su contraseña");

if (contrasenaValida == "2Fj(jjbFsuj" || contrasenaValida == "eoZiugBf&g9") {
  console.log(true);
} else {
  console.log("Contraseña invalida, por favor intente nuevamente");
}
