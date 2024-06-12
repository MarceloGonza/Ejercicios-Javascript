// Se trata de escribir un script que diga si un número es par o es impar.
// Recordemos que un número es par si al dividirlo por 2 da como resto 0.

var num = parseInt(prompt("Ingrese un valor numerico: "))

var rest = num % 2
var par = rest == 0

alert("El valor es: " + par)
