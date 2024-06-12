// En un tramo de un rally los conductores no deben ir ni demasiado rápido
// ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en
// kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h
// el conductor pasa la prueba en caso contrario es descalificado.
// Ejemplo si recorre 100 km en 4 horas, ha ido a una velocidad de
//  100/4 que son 25km/h. Estaría descalificado.

var km = parseInt(prompt("Ingrese la cantidad de kilometros que realizo: "))
var tiempo = parseInt(prompt("Ingrese el tiempo que se tomo al realizarlo: "))

var rest = km / tiempo

if (rest >= 40 && rest <= 60) {
    alert("Usted a superado la prueba")
} else {
    alert("Usted NO a pasado la prueba")
}