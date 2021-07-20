"use strict"

/*Tablas de multiplicar */

var numero = parseInt(prompt("De que numero quieres la tabla", 1));

for (var i = 1; i <= 10; i++) {
    document.write(i + "x" + nuemro + "=" (i * numero) + "<br/>");
}

/*Todas las tablas*/

for (var c = 1; c <= 10; c++) {
    document.write(c + "x" + nuemro + "=" (c * numero) + "<br/>");
    for (var i = 1; i <= 10; i++) {
        document.write(i + "x" + nuemro + "=" (i * numero) + "<br/>");
    }
}