// Este ejercicio dirigirá a los clientes a la barra de
// bebidas o a la de comidas, para ello el cliente puede
// pedir vino, cerveza, refresco, agua. Si pide un cerveza
// o vino se le dirige a la barra y si no pues se le dirige a la tienda.

var pedido = prompt("Ingrese la bebida que desee: ")

if (pedido == "vino" || pedido == "cerveza" ||
    pedido == "refresco" || pedido == "agua") {
    alert("Por favor dirigase a la barra")
} else {
    alert("Su producto esta en la tienda, lo invitamos a conocerla")
}