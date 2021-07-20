"use strict"

/*Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario*/

var number1 = parseInt(prompt("Ingrese el primer numero"), 0);
var number2 = parseInt(prompt("Ingrese el segundo numero"), 0);

while (number1 >= number2 || isNaN(number1) || number2 <= number1 || isNaN(number2)) {
    number1 = parseInt(prompt("Ingrese el primer numero"), 0);
    number2 = parseInt(prompt("Ingrese el segundo numero"), 0);
}

/*document.write("<h1>De " + numero1+ "a" +numero2+"estan los numero:</h1>"); */
for (var i = (number1 + 1); i < number2; i++) {
    console.log(i);
}