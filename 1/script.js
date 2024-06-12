// Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te
// calcule el precio total que vas a pagar por tu compra.
// Te recuerdo que para calcular el total debes sumar al precio el resultado de
// multiplicas precio por el iva y dividir por 100.

var compra = 200
var iva = 21 * 200 / 100
var total = compra + iva
console.log(total)