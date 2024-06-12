// Crea un programa que pida la nota de un estudiante en los tres 
// trimestres del curso y calcule la nota promedio. El resultado 
// que dará será suspenso si la media es menor de 5, aprobado si 
// está entre 5 y 7 y  Notable por encima de 7.
// Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable

var nota1 = parseInt(prompt("Ingrese la nota del primer trimestre: "))
var nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre: "))
var nota3 = parseInt(prompt("Ingrese la nota del tercer trimestre: "))

var promedio = (nota1 + nota2 + nota3) / 3

if (promedio < 5) {
    alert("Usted no a aprobado")
} if (promedio >= 5 && promedio <= 7) {
    alert("Usted aprobo!")
} if (promedio > 7) {
    alert("Usted aprobo sobresalientemente")
}