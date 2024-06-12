// Una tienda aplica un descuento del 15% para las compras que incluyan
// más de 10 artículos iguales cuyo precio sea superior a 40 euros.
// Tu programa debe comprobar y calcular la cantidad a pagar sabiendo
// el número de artículos y el precio de cada uno.
// Por ejemplo si compras 20 artículos de 50 euros se te descuenta un 15%
// del total pagarías 20*50 - 20*50*0.15 = 850 eruos.

var articulos, precio, factura

articulos = parseInt(prompt("Ingrese la cantidad de artículos: "))
precio = parseInt(prompt("Ingrese el monto: "))

factura = precio * articulos

if (articulos > 10 && precio > 40) {
    factura = factura * (1 - 0.15)
}
alert("Total a pagar " + factura)
