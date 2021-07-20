/* Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales /3 y si los numeros no son un numero o son menores o iguales a cero, que nos vuelva a pedir los numeros*/

"use strict"

var numero1 = parseInt(prompt(" Ingrese el numero 1"));
var numero2 = parseInt(prompt(" Ingrese el numero 2"));



if (numero1 === numero2) {
    alert("NUMERO1 Y NUMERO2 SON IGUALES");
} else if (numero1 > numero2) {
    alert("numero1 es mayor a numero 2");
} else if (numero1 < numero2) {
    alert("numero1 es menor que numero2");
} else {
    alert("Introduce nuemeros correctos");
}