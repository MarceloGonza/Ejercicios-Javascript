// En este ejercicio debes pedir dos números enteros y devolver 
// el cociente de dividir el primero entre el segundo, pero si 
// este es cero no debe hacer la división, sino lanzar un 
// mensaje de error

// Si se entran el número 8 y 2, debe resultar 4
// Si se entran 4 y 0, dbe resultar en un mensaje de error.

var num1 = parseInt(prompt("Ingrese un numero: "))
var num2 = parseInt(prompt("Ingrese un numero: "))

var cociente

if (num2 != 0) {
    cociente = num1 / num2
    alert(num1 + " / " + num2 + " = " + cociente)
} else {
    alert("Error, no puedes dividir por 0")
}