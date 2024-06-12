// Este programa te ayuda a viajar. El programa pide al usuario
// si va a viajar con coche, tren, bicicleta o autobús.
// Si va en tren o autobus le recordará que lleve dinero para el billete.
// Ej: El cliente pide ir en tren, aparecerá el mesnaje "lleva dinero para el ticket"

var viajar = prompt("Ingrese su metodo de viaje: ")

if (viajar == "tren" || viajar == "autobus" ||
    viajar == "micro" || viajar == "taxi") {
    alert("No olvide llevar dinero para viajar")
} if (viajar == "coche") {
    alert("Acuerdese seguir los protocolos establecidos para menejar adecuadamente")
} else {
    alert("Tenga cuidado en el camino y respete las señales viales")
}