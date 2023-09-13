/*
Programa una función que elimine cierto patrón de caracteres de un texto dado.
Ejemplo:
    miFuncion("xyz1, xyz2, zyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5"
*/

console.log("================[EJERCICIO 8]================");
function usandoConsole8(cadena, patron) { //Creamos una función que recibe un argumento por valor
    const palabras = cadena.split(' '); // Separamos la cadena

    for(let i = 0; i < palabras.length; i++) { // Recorremos el array...
        palabras[i] = palabras[i].replace(patron, ""); // Por cada valor en palabras se hará un reemplazo
        // Si el valor en palabras[i] contiene el valor en "patron", se reemplaza por un valor vacío
    }

    return palabras.join(' '); // Retornamos el arreglo pero haciendo un join del mismo.
}

let resultado8 = usandoConsole8("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado8); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");


function usandoHTML8() {
    function actualizarResultado() {
        const textarea = document.getElementById("texto8");
        const patronInput = document.getElementById("patron");
        const eliminado = document.getElementById("eliminado");
        const texto = textarea.value;
        const patron = new RegExp(patronInput.value, "g"); // Creamos una expresión regular con el patrón

        eliminado.textContent = texto.replace(patron, "");
    }

    document.getElementById("texto8").addEventListener("input", actualizarResultado);
    document.getElementById("patron").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML8();