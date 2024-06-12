// Escribe un programa que solicite al usuario ingresar el número de kilómetros
// recorridos por su coche y el número de litros consumidos. El script debe mostrar el
// consumo de combustible por kilómetro.
// Un problema matemático muy simple numero de litros dividido por número de
// kilómetros.

var km = prompt("Ingrese los kilómetros recorridos por su coche: ")
var litros = prompt("Ingrese los litros consumidos: ")

var resultado = litros / km
alert("El consumo de combustible por kilómetro es de: " + resultado + "litros")