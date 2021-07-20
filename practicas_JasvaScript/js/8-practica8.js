"use strict"

var number1 = parseInt(prompt("Ingrese el primer numero"), 0);
var number2 = parseInt(prompt("Ingrese el segundo numero"), 0);

while (number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)) {
    number1 = parseInt(prompt("Ingrese el primer numero"), 0);
    number2 = parseInt(prompt("Ingrese el segundo numero"), 0);
}

var resultado = "La suma es: " + (number1 + number2) + " </br>" +
    "La resta es: " + (number1 - number2) + " </br>" +
    "La multiplicacion es: " + (number1 * number2) + " </br>" +
    "La division es: " + (number1 / number2) + " </br>";

var resultadoCMD = "La suma es: " + (number1 + number2) + " \n" +
    "La resta es: " + (number1 - number2) + " \n" +
    "La multiplicacion es: " + (number1 * number2) + " \n" +
    "La division es: " + (number1 / number2) + " \n";

document.write(resultado);

/* para hacer un salto de linea en un alert debemos usar "\n"*/

alert(resultadoCMD);