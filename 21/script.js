// Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos:
// edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales
// o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

var edad = prompt("Ingrese su edad: ");

var ingresos = prompt("Coloque sus ingresos");

if ((edad >= 18) & (ingresos >= 1000)) {
  ingresoFinal = (ingresos * 40) / 100;
  console.log(ingresoFinal);
} else {
  console.log(0);
}
