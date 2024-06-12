// En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script
// mostrará como resultado el valor medio de los tres.
// Recuerda que la media de tres números se calcula sumando los tres y dividiendo
// entre 3.

var num1 = parseInt(prompt("Teclea un numero entero"));
var num2 = parseInt(prompt("Teclea un numero entero"));
var num3 = parseInt(prompt("Teclea un numero entero"));
var media = (num1 + num2 + num3) / 3;
alert("La media de los numeros ingresados es: " + media)