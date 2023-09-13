/*
Programa una función que determine si un número es par o impar.
Ejemplo:
    miFuncion(29) devolverá Impar.
*/

console.log("================[EJERCICIO 13]================");
function usandoConsole13(numero) { //Creamos una función que recibe un argumento por valor
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

let resultado13 = usandoConsole13(9); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado13); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");


function usandoHTML13() {
    function actualizarResultado() {
        const textarea = document.getElementById("es-par");
        const par = document.getElementById("par");

        let texto = textarea.value;

        texto = parseInt(texto);

        if (texto % 2 === 0) {
            par.textContent = "Par";
        } else {
            par.textContent = "Impar";
        }
    }

    document.getElementById("es-par").addEventListener("input", actualizarResultado);
    document.getElementById("par").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML13();