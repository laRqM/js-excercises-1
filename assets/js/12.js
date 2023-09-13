/*
Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no.
Ejemplo:
    miFuncion(7) devolverá true.
*/

console.log("================[EJERCICIO 12]================");
function usandoConsole12(numero) { //Creamos una función que recibe un argumento por valor
    if (numero <= 1) { // Los números menores o iguales a 1 no son primos
        return false; // Retornamos false
    }

    for (let i = 2; i * i <= numero; i++) { // Comenzamos a contar a partir del 2, pues el 1 ya lo evaluamos arriba
        if (numero % i === 0) { //  Si es divisible por algún número en este rango, no es primo
            return false; // Retornamos false
        }
    }

    return true; // Si no se encuentra ningún divisor, es primo
}

let resultado12 = usandoConsole12(3); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado12); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");

function usandoHTML12() {
    function actualizarResultado() {
        const textarea = document.getElementById("num-prime"); // Declaramos una variable para el textarea
        const primo = document.getElementById("primo");
        let texto = textarea.value; // Obtener el valor del textarea

        texto = parseInt(texto);

        if (texto <= 1) { // Los números menores o iguales a 1 no son primos
            primo.textContent = "No"; // Mandamos el resultado al HTML
            return;
        }

        for (let i = 2; i * i <= texto; i++) { // Comenzamos a contar a partir del 2, pues el 1 ya lo evaluamos arriba
            if (texto % i === 0) { //  Si es divisible por algún número en este rango, no es primo
                primo.textContent = "No"; // Mandamos el resultado al HTML
                return;
            }
        }

        primo.textContent = "Sí"; // Mandamos el resultado al HTML
    }

    document.getElementById("num-prime").addEventListener("input", actualizarResultado);
    document.getElementById("primo").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML12();