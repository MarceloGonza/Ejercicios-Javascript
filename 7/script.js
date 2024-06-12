// Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de
// patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado
// el número de comensales calcule las cantidades de ingredientes necesarias

var comensales = parseInt(prompt("Ingrese el numero de comensales: "))
var persPatata = 200
var persHuevos = 1
var persCebolla = 300 / 5


var patata = comensales * persPatata
var huevos = comensales * persHuevos
var cebolla = comensales * persCebolla
alert("La cantidad de patatas que necesitaran son: " + patata + " gramos")
alert("La cantidad de huevos que necesitaran son: " + huevos)
alert("La cantidad de cebolla que necesitaran son: " + cebolla + " gramos")