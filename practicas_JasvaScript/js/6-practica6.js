"use strict"

/* Introducir un numero y que nos indique se es par o impar */

var numero = parseInt(prompt("Introduce un numero", 0));

while (isNaN(numero)) {
    numero = parseInt(prompt("Introduce un numero", 0));
}

if (numero % 2 == 0) {
    alert("Es un numero par");
} else {
    alert("Es impar");
}