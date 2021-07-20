"use strict"

/* Mostrar todos los numeros impares que hay entre dos numero introducidos por el usuario */

var number1 = parseInt(prompt("Ingrese el primer numero"), 0);
var number2 = parseInt(prompt("Ingrese el segundo numero"), 0);

while (number1 >= number2 || isNaN(number1) || number2 <= number1 || isNaN(number2)) {
    number1 = parseInt(prompt("Ingrese el primer numero"), 0);
    number2 = parseInt(prompt("Ingrese el segundo numero"), 0);
}

for (var i = (number1 + 1); i < number2; i++) {
    if (i % 2 != 0) {

        console.log(i);
    }
    doc.innerHTML = "Los numero impares son " + i;
}

/* El operador logico "%" porciento nos devuelve el resto del dividendo */

/* Solucion con un while debajo

while (numero1 < numero2) {
    numero++;
    if (numero1 % 2 != 0) {
        console.log("El numero" + numero1 + "es impar");
    }
}
*/