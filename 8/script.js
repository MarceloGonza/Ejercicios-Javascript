// Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes
// estar seguro: entiendes las variables.
// Teiens que escribir un programa que intercambie el valor de dos variables. Al final la
// primera variable debe terner el valor de la segunda y la segunda el valor de la
// primera. No vale usar arrays ni asignación múltiple

var uno = 10
var dos = 30

var tres = uno

console.log("var uno antes del cambio es: " + uno)
console.log("var dos antes del cambio es:  " + dos)

var uno = dos
var dos = tres

console.log("var uno es: " + uno)
console.log("var dos es: " + dos)