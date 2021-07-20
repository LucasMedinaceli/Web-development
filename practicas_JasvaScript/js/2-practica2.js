//utilizando un boocle buscar la media(promedio) y la suma de los numeros introducidos por el usuario hasta que metamos un numero negativo y ahi mostrar el resultado

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduzca un numero"));

    if (isNan(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;
        contador++;
    }

} while (numero => 0)