/*
Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n).
Ejemplo:
    miFuncion(5) devolverá 120.
 */

console.log("================[EJERCICIO 11]================");
function usandoConsole11(numero) { //Creamos una función que recibe un argumento por valor
    if (numero === 0 || numero === 1) {
        return 1; // El factorial de 0 y 1 es 1
    } else {
        return numero * usandoConsole11(numero - 1);
    }
}

let resultado11 = usandoConsole11(5); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado11); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");

function usandoHTML11() {
    function actualizarResultado() {
        const textarea = document.getElementById("num-fact"); // Declaramos una variable para el textarea
        const factorial = document.getElementById("factorial");
        let texto = textarea.value; // Obtener el valor del textarea

        texto = parseInt(texto);

        let resultado = 1; // El resultado de 0! y 1! es 1

        for (let i = 1; i <= texto; i++) { // Ciclo for que tendrá tantos bucles como el número que ingresemos
            resultado *= i; // Multiplicamos el valor actual de "resultado" por "i" y se almacena el nuevo resultado en la variable "resultado".
        }

        factorial.textContent = resultado; // Mandamos el resultado al HTML
    }

    document.getElementById("num-fact").addEventListener("input", actualizarResultado);
    document.getElementById("factorial").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML11();