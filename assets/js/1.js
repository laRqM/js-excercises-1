/*
Programa una función que cuente el número de caracteres de una cadena de texto.
Ejemplo:
    miFuncion("Hola mundo") devolverá 10
*/

console.log("================[EJERCICIO 1]================");
function usandoConsole(cadena) { //Creamos una función que recibe un argumento por valor
    return cadena.length; //Retornamos el largo de "cadena".
}

let resultado = usandoConsole("Hola mundo"); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");

function usandoHTML() {
    let textarea = document.getElementById("texto"); //Declaramos una variable para el textarea
    let contador = document.getElementById("contador"); //Declaramos una variable para el contador

    textarea.addEventListener("input", function () { //Creamos un eventListener que detecta cuando escribimos algo
        const texto = textarea.value; //La constante "texto" será igual al valor en textarea
        contador.textContent = texto.length; //Al contador le pasamos el largo de la constante "texto"
    });
}

usandoHTML();
