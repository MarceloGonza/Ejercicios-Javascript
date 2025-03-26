//Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, que nos permita sumar,
//restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b)
//y uno el nombre de la operación (en minúsculas). Si el parámetro de la operación no es válido que mande un error
//personalizado a la consola.

let a = Number(prompt("Ingrese un valor A: "));
let b = Number(prompt("Ingrese un valor B: "));
let c = prompt("Ingrese el nombre de la operacion a realizar: ");

function calc() {
  if (c === "multiplicacion") {
    alert("El resultado es : " + a * b);
  } else if (c === "division") {
    alert("El resultado es: " + a / b);
  } else if (c === "resta") {
    alert("El resultado es: " + (a - b));
  } else if (c === "suma") {
    alert("El resultado es: "(a + b));
  } else {
    alert("Operacion no valida");
  }
}

calc();

//resolucion con swicth:
/*
function ejercicioUno(a = 0, b = 0, operation = "suma") { //parametros por defecto
    switch(operation){
        case "suma":
            return console.log(a + b)
        case "resta":
            return console.log(a - b)
        case "division":
            return console.log(a / b)
        case "multiplicacion":
            return console.log(a * b)
        default:
            console.error(`La operacion ${operation} no es valida!`)
    }
}

ejercicioUno(12, 5, "suma");

*/
