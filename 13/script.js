// Este script pide al usuario que teclee una letra entre A, B, C, D. 
// Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje 
// de que ha acertado, en caso contrario le dirá que se equivocó.

var letra = prompt("Ingrese una letra entre A, B, C ,D")

if (letra == "A" || letra == "a") {
    alert("Has acertado!")
} else {
    alert("Usted se ah equivocado!")
}