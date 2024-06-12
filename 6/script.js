// En este script debes pedir al usuario un número de dos dígitos y debes devolver el
// número de unidades y de decenas, o sea, cada dígito del número. Usa solo
// operationes aritméticas
// Recuerda si divides un número entre 10 el cociente entero es el número de decenas
// y el resto es el número de unidades

var num = parseInt(prompt("teclear un número 1 a 99"))
var unidades, decenas;
unidades = num % 10;
decenas = parseInt(num / 10);
alert("Las decenas son: " + decenas);
alert("Y las unidades son: " + unidades);